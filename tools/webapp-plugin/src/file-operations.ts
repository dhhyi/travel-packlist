import {
  writeFileSync,
  readFileSync,
  unlinkSync,
  readdirSync,
  statSync,
  rmdirSync,
} from 'fs';

export const moveFile = (
  from: string,
  to: string,
  modify?: (content: string) => string,
) => {
  let content = readFileSync(from, modify ? { encoding: 'utf-8' } : undefined);
  unlinkSync(from);
  if (modify) {
    content = modify(content as string);
  }
  writeFileSync(to, content);
};

export const updateFile = (
  path: string,
  modify: (content: string) => string,
) => {
  writeFileSync(path, modify(readFileSync(path, { encoding: 'utf-8' })));
};

export const removeDirectoryRecursive = (path: string) => {
  readdirSync(path).forEach((file) => {
    const curPath = `${path}/${file}`;
    if (statSync(curPath).isDirectory()) {
      removeDirectoryRecursive(curPath);
    } else {
      unlinkSync(curPath);
    }
  });
  rmdirSync(path);
};
