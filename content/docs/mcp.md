# MCP Support

**MCP (Model Context Protocol)** is an open standard that lets you connect any MCP-compatible server to Ubot. This allows you to add new tools and capabilities without writing any code inside Ubot.

### Key Concepts

-   **MCP Server**: A standalone process that provides tools, resources, and prompts.
-   **MCP Client**: Ubot acts as a client, discovers the server's capabilities, and makes them available to the LLM orchestrator.

### Adding an MCP Server

You can add an MCP server via the **MCP** page in the Dashboard or by editing your `config.json`.

**Example Configuration**:

```json
"mcp_servers": {
  "weather": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-weather", "--api-key", "YOUR_API_KEY"],
    "enabled": true
  },
  "database": {
    "command": "docker",
    "args": ["run", "-i", "--rm", "mcp/postgres-server", "postgresql://localhost:5432/mydb"],
    "enabled": false
  }
}
```

### Why use MCP?

-   **Ecosystem**: Use pre-built servers from the [MCP community](https://modelcontextprotocol.io/).
-   **Isolation**: Servers run as separate processes, keeping Ubot stable.
-   **Language Agnostic**: Build servers in Python, JS, Go, or any language you prefer.

### Discovery

Once an MCP server is added and enabled, Ubot will automatically discover its tools (functions). These tools will appear in the **Tools** page and are immediately callable by the LLM orchestrator.

Examples include:
-   **Google Search** (via `google-search` MCP)
-   **Postgres/MySQL Querying**
-   **Git/Github Operations**
-   **Slack/Discord Integrations**
