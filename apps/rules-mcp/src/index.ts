import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { randomUUID } from 'crypto';
import { createServer } from 'http';

import { createMcpServer } from './mcp-server.js';

class McpSession {
  private _lastActivity = Date.now();
  private readonly server: McpServer;
  private transport: StreamableHTTPServerTransport | undefined;

  constructor() {
    this.server = createMcpServer({
      log: (msg) => console.log(`[${this.transport?.sessionId}] ${msg}`),
    });
  }

  get lastActivity(): number {
    return this._lastActivity;
  }

  async connect(transport: StreamableHTTPServerTransport): Promise<void> {
    this.transport = transport;
    await this.server.connect(this.transport);
  }

  handleRequest(
    ...args: Parameters<StreamableHTTPServerTransport['handleRequest']>
  ) {
    if (!this.transport) {
      throw new Error('Transport not connected');
    }
    this._lastActivity = Date.now();
    return this.transport.handleRequest(...args);
  }

  close() {
    this.transport?.close();
    this.server.close();
  }
}

const SESSION_TIMEOUT_MS = 10 * 60 * 1000;
const sessions = new Map<string, McpSession>();

setInterval(() => {
  const now = Date.now();
  for (const [id, session] of sessions) {
    if (now - session.lastActivity > SESSION_TIMEOUT_MS) {
      console.log(`Session ${id} expired`);
      session.close();
      sessions.delete(id);
    }
  }
}, 60_000);

const PORT = parseInt(process.env['PORT'] ?? '3100', 10);

const httpServer = createServer(async (req, res) => {
  if (req.url === '/mcp') {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let session: McpSession | undefined;
    if (sessionId) {
      session = sessions.get(sessionId);
    } else {
      try {
        session = new McpSession();
        const transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => sessionId ?? randomUUID(),
          onsessioninitialized: (id) => {
            console.log(`Session initialized: ${id}`);
            if (session) {
              sessions.set(id, session);
            }
          },
          onsessionclosed: (id) => {
            console.log(`Session closed: ${id}`);
            session?.close();
            sessions.delete(id);
          },
        });
        await session.connect(transport);
      } catch (error) {
        console.error('Error handling MCP request:', error);
        if (!res.headersSent) {
          res.writeHead(500);
          res.end('Internal Server Error');
        }
      }
    }
    if (session) {
      try {
        await session.handleRequest(req, res);
      } catch (error) {
        console.error('Error handling MCP request:', error);
        if (!res.headersSent) {
          res.writeHead(500);
          res.end('Internal Server Error');
        }
      }
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`MCP server listening on http://0.0.0.0:${PORT}/mcp`);
});
