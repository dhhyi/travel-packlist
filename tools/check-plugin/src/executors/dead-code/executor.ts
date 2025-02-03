import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { Minimatch } from 'minimatch';
import { dirname } from 'path';
import {
  ClassDeclaration,
  Node,
  Project,
  ReferenceFindableNode,
  SourceFile,
  SyntaxKind,
} from 'ts-morph';

import { ExecutorSchema } from './schema';

class Context {
  private errors = 0;
  exportTokens: Node[] | undefined;
  readonly project: Project;
  readonly analyzeList: (Node & ReferenceFindableNode)[] = [];

  constructor(
    public readonly options: ExecutorSchema,
    public readonly pluginContext: ExecutorContext,
  ) {
    this.project = new Project({ tsConfigFilePath: options.tsConfig });
  }

  hasErrors() {
    return this.errors > 0;
  }

  logTrace(...args: unknown[]) {
    if (this.options.verbose) {
      console.log('\x1b[90m%s\x1b[0m', args.join(' '));
    }
  }

  private getLocalPath(node: Node) {
    return node
      .getSourceFile()
      .getFilePath()
      .substring(this.pluginContext.cwd.length + 1);
  }

  logError(node: Node, message: string) {
    this.errors++;
    const localPath = this.getLocalPath(node);
    const fileRef = `${localPath}:${node.getStartLineNumber().toString()}`;
    const nodeRef = `${node.getKindName()} ${getSimpleName(node)}`;
    console.error('%s \x1b[31m%s %s\x1b[0m', fileRef, nodeRef, message);
  }

  logInfo(...args: unknown[]) {
    console.log('\x1b[36m%s\x1b[0m', args.join(' '));
  }

  projectRootPath(): string {
    const context = this.pluginContext;
    return context.projectsConfigurations.projects[context.projectName!].root;
  }

  private pathLookupCache: Record<string, string> | undefined;
  pathLookup() {
    if (!this.pathLookupCache) {
      this.pathLookupCache = Object.entries(
        this.project.getCompilerOptions().paths!,
      ).reduce<Record<string, string>>((acc, [short, entries]) => {
        entries.forEach((entry) => {
          acc[entry] = short;
        });
        return acc;
      }, {});
    }
    return this.pathLookupCache;
  }

  private projectFilePathsCache: string[] | undefined;
  projectFilePaths() {
    if (!this.projectFilePathsCache) {
      this.projectFilePathsCache = this.project
        .getSourceFiles()
        .map((source) =>
          source
            .getFilePath()
            .substring(this.project.getCompilerOptions().baseUrl!.length + 1),
        );
    }
    return this.projectFilePathsCache;
  }
}

function analyzeReferences(node: ReferenceFindableNode & Node) {
  return node
    .findReferencesAsNodes()
    .map((reference) => reference.getSourceFile())
    .reduce<{ other: number; same: number }>(
      (acc, sourceFile) => {
        if (sourceFile.getFilePath() === node.getSourceFile().getFilePath()) {
          acc.same++;
        } else {
          acc.other++;
        }
        return acc;
      },
      { other: 0, same: 0 },
    );
}

function analyzeComponent(this: Context, componentNode: ClassDeclaration) {
  const componentDecorator = componentNode.getDecorator('Component');
  if (!componentDecorator) {
    throw new Error(
      `Expected ${getSimpleName(componentNode)} to have a @Component decorator`,
    );
  }
  this.logTrace('Analyzing component', getSimpleName(componentNode));
  const componentMetadata = componentDecorator.getArguments()[0];
  if (!Node.isObjectLiteralExpression(componentMetadata)) {
    throw new Error('Expected component metadata to be an object literal');
  }
  let template: string | undefined;
  const templateUrl = componentMetadata.getProperty('templateUrl');
  if (Node.isPropertyAssignment(templateUrl)) {
    const templatePath = templateUrl.getInitializerIfKind(
      SyntaxKind.StringLiteral,
    );
    if (templatePath) {
      this.logTrace('Loading template', templatePath.getText());
      const fullTemplatePath =
        dirname(componentNode.getSourceFile().getFilePath()) +
        '/' +
        templatePath.getLiteralValue();
      template = readFileSync(fullTemplatePath, {
        encoding: 'utf-8',
      });
    }
  } else {
    const templateProperty = componentMetadata.getProperty('template');
    if (Node.isPropertyAssignment(templateProperty)) {
      template = templateProperty
        .getInitializerIfKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue();
    }
  }
  if (!template) {
    throw new Error(
      'Could not find template for component ' +
        getSimpleName(componentNode) +
        ' in ' +
        componentNode.getSourceFile().getFilePath(),
    );
  }

  const isUsedOnTemplate = (name: string) => {
    const pattern = `\\b${name.replace(/\$$/, '')}\\b`;
    return new RegExp(pattern).test(template);
  };

  const isUsedInHostBinding = (() => {
    const host = componentMetadata.getProperty('host');
    if (Node.isPropertyAssignment(host)) {
      return (name: string) => {
        const hostValue = host.getInitializerIfKind(
          SyntaxKind.ObjectLiteralExpression,
        );
        if (hostValue) {
          const nameMatchPattern = new RegExp(`\\b${name}\\b`);
          return hostValue.getProperties().some((property) => {
            return nameMatchPattern.test(property.getText());
          });
        }
        return false;
      };
    }
    return () => false;
  })();

  const isInputOrOutputOrModel = (node: Node) => {
    if (!Node.isPropertyDeclaration(node)) {
      return false;
    }
    const init = node.getInitializerIfKind(SyntaxKind.CallExpression);
    return (
      init &&
      ['input', 'input.required', 'output'].some((name) => {
        return init.getExpression().getText() === name;
      })
    );
  };

  componentNode.forEachChild((node) => {
    if (
      (Node.isMethodDeclaration(node) || Node.isPropertyDeclaration(node)) &&
      !node.getFirstModifierByKind(SyntaxKind.PrivateKeyword) &&
      !isUsedOnTemplate(getSimpleName(node)) &&
      !isUsedInHostBinding(getSimpleName(node)) &&
      !isInputOrOutputOrModel(node)
    ) {
      this.analyzeList.push(node);
    }
  });
}

function traverse(this: Context, node: Node) {
  function isExported(this: Context, node: Node) {
    if (this.exportTokens?.includes(node)) {
      this.logTrace(
        'Skipping analysis of exported token:',
        node.getKindName(),
        getSimpleName(node),
      );
      return true;
    }
    return false;
  }

  node.forEachChild((node) => {
    if (Node.isClassDeclaration(node) && node.getDecorator('Component')) {
      analyzeComponent.bind(this)(node);
    }

    if (isExported.bind(this)(node)) {
      return;
    }

    if (
      Node.isImportDeclaration(node) ||
      Node.isExportDeclaration(node) ||
      Node.isExportAssignment(node) ||
      node.getKind() === SyntaxKind.EndOfFileToken
    ) {
      return;
    }

    if (Node.isClassDeclaration(node) && node.isExported()) {
      this.analyzeList.push(node);
      if (!node.getDecorator('Component')) {
        traverse.bind(this)(node);
      }
    } else if (
      (Node.isPropertyDeclaration(node) || Node.isMethodDeclaration(node)) &&
      !node.getFirstModifierByKind(SyntaxKind.PrivateKeyword)
    ) {
      this.analyzeList.push(node);
    } else if (
      (Node.isInterfaceDeclaration(node) ||
        Node.isFunctionDeclaration(node) ||
        Node.isTypeAliasDeclaration(node) ||
        Node.isVariableDeclaration(node)) &&
      node.isExported()
    ) {
      this.analyzeList.push(node);
    } else if (Node.isVariableStatement(node) && node.isExported()) {
      node
        .getDeclarations()
        .filter((declaration) => !isExported.bind(this)(declaration))
        .forEach((declaration) => {
          this.analyzeList.push(declaration);
        });
    } else {
      try {
        const name = getSimpleName(node);
        this.logTrace('Skipping', node.getKindName(), name);
      } catch (_) {
        this.logTrace('Skipping', node.getKindName());
      }
    }
  });
}

function traverseProject(this: Context) {
  const excludes = (this.options.exclude ?? []).map(
    (exclude) => new Minimatch(exclude),
  );
  this.project
    .getSourceFiles(`${this.projectRootPath()}/**/*.ts`)
    .filter((sourceFile) => {
      return !excludes.some((exclude) => {
        return exclude.match(sourceFile.getFilePath());
      });
    })
    .forEach((sourceFile) => {
      const path = sourceFile.getFilePath();
      this.logTrace('Analyzing', path);
      traverse.bind(this)(sourceFile);
    });

  this.analyzeList.forEach((node) => {
    const { same, other } = analyzeReferences(node);
    this.logTrace(
      `${getSimpleName(node)}: ${same.toString()} references in same file, ${other.toString()} in other files`,
    );
    if (same === 0 && other === 0) {
      this.logError(node, 'No references found');
    } else if (other === 0) {
      this.logError(node, 'No external references found for this export');
    }
  });
}

function getSimpleName(node: Node): string {
  if (
    Node.isNamed(node) ||
    Node.isNameable(node) ||
    Node.isPropertyNamed(node) ||
    Node.isVariableDeclaration(node)
  ) {
    return node.getName()!;
  } else if (Node.isVariableStatement(node)) {
    return node
      .getDeclarations()
      .map((d) => d.getName())
      .join(', ');
  } else {
    throw new Error(`Could not get name from node: ${node.getKindName()}`);
  }
}

function reportFileName(id: string, type: 'exports' | 'imports') {
  return `dist/${id}/dead-code/${type}.json`;
}

export type ExportReport = Record<
  string,
  Record<string, { type: string; path: string; line: number }>
>;

function writeExportReport(this: Context) {
  function findExportedTokens(sourceFile: SourceFile): Node[] {
    const nodes: Node[] = [];
    sourceFile.forEachChild((node) => {
      if (Node.isExportDeclaration(node)) {
        const namedExports = node.getNamedExports().flatMap((namedExport) => {
          const token = node
            .getModuleSpecifierSourceFileOrThrow()
            .getExportedDeclarations()
            .get(namedExport.getName());
          if (!token) {
            throw new Error(
              `Could not find exported token: ${namedExport.getName()} from ${sourceFile.getFilePath()}:${node.getStartLineNumber().toString()}`,
            );
          }
          return token;
        });
        if (namedExports.length) {
          nodes.push(...namedExports);
        } else if (
          node.getChildAtIndex(1).getKind() === SyntaxKind.AsteriskToken
        ) {
          for (const exp of node
            .getModuleSpecifierSourceFileOrThrow()
            .getExportedDeclarations()
            .values()) {
            nodes.push(...exp);
          }
        } else {
          throw new Error(
            `Unexpected export declaration: ${node.getText()} in ${sourceFile.getFilePath()}:${node.getStartLineNumber().toString()}`,
          );
        }
      } else {
        if (node.getKind() !== SyntaxKind.EndOfFileToken) {
          throw new Error(
            `Unexpected node: ${node.getKindName()} in ${sourceFile.getFilePath()}:${node.getStartLineNumber().toString()}`,
          );
        }
      }
    });
    return nodes;
  }

  function jsonExportReport(nodes: Node[], id: string): ExportReport {
    const projectRoot = nodes[0].getProject().getCompilerOptions().baseUrl!;
    const report = nodes.reduce<
      Record<string, ExportReport[string][string] | undefined>
    >((acc, node) => {
      const type = node.getKindName();
      const name = getSimpleName(node);
      const path = node
        .getSourceFile()
        .getFilePath()
        .substring(projectRoot.length + 1);
      const line = node.getStartLineNumber();
      acc[name] = { type, path, line };
      return acc;
    }, {});
    return { [id]: report } as ExportReport;
  }

  const projectFiles = this.projectFilePaths();

  const shortPathLookup = this.pathLookup();

  const entryFiles = projectFiles.filter(
    (file) => shortPathLookup[file] && file.startsWith(this.projectRootPath()),
  );
  if (entryFiles.length === 1) {
    const mainEntryFile = entryFiles[0];
    const entryFile = this.project.getSourceFile(mainEntryFile)!;
    const exportTokens = findExportedTokens(entryFile);
    this.exportTokens = exportTokens;
    const report = jsonExportReport(
      exportTokens,
      shortPathLookup[mainEntryFile],
    );
    const reportPath = reportFileName(this.projectRootPath(), 'exports');
    this.logInfo('Writing export report to', reportPath);
    mkdirSync(dirname(reportPath), { recursive: true });
    writeFileSync(reportPath, JSON.stringify(report, null, 2), {
      encoding: 'utf-8',
    });
  }
}

export type ImportReport = Record<string, string[]>;

function writeImportReport(this: Context) {
  function jsonImportReport(this: Context): ImportReport {
    const shortPaths = this.project.getCompilerOptions().paths! as Record<
      string,
      string[] | undefined
    >;
    const projectFiles = this.projectFilePaths();
    return projectFiles
      .flatMap((file) => {
        return this.project
          .getSourceFileOrThrow(file)
          .getImportDeclarations()
          .flatMap((node) => {
            const module = node.getModuleSpecifier().getLiteralValue();
            if (shortPaths[module]?.length) {
              return node.getNamedImports().map((namedImport) => {
                const name = namedImport.getNameNode().getText();
                return [module, name] as const;
              });
            }
            return undefined;
          })
          .filter((x) => !!x);
      })
      .reduce<ImportReport>((acc, [m, name]) => {
        acc[m] = [...(acc[m] ?? []), name].filter(
          (v, i, a) => a.indexOf(v) === i,
        );
        return acc;
      }, {});
  }

  const report = jsonImportReport.bind(this)();
  if (Object.keys(report).length) {
    const reportPath = reportFileName(this.projectRootPath(), 'imports');
    this.logInfo('Writing import report to', reportPath);
    mkdirSync(dirname(reportPath), { recursive: true });
    writeFileSync(reportPath, JSON.stringify(report, null, 2), {
      encoding: 'utf-8',
    });
  }
}

const run: PromiseExecutor<ExecutorSchema> = async (options, pluginContext) => {
  try {
    const context = new Context(options, pluginContext);
    context.logInfo('Running dead code executor');

    writeExportReport.bind(context)();
    writeImportReport.bind(context)();
    traverseProject.bind(context)();

    return await Promise.resolve({ success: !context.hasErrors() });
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
