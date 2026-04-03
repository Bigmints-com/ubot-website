# Tool Modules

Ubot's functionality is encapsulated into **Modules**. Each module provides a collection of related **Tools** that are exposed to the LLM orchestrator.

### Core Modules

| Module               | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| **Messaging**        | Send, search, and forward messages via WhatsApp, Telegram, or iMessage. |
| **Google Workspace** | Gmail, Drive, Sheets, Docs, Contacts, Calendar, and Places integrations. |
| **CLI Agents**       | Delegate development tasks to Gemini CLI, Claude Code, or Codex CLI. |
| **File System**      | Sandboxed read/write/list/search for files and folders on your disk. |
| **Scheduler**        | Manage cron jobs, reminders, and persistent one-time tasks. |
| **Skills**           | Automated workflows with trigger/condition/outcome logic. |
| **Memory**           | Persistent "Soul" storage and conversational memory retrieval. |
| **Web Search**       | Multi-provider web search (Serper, Anthropic, or direct fetch). |
| **Approvals**        | Secure owner approval gate for sensitive visitor actions. |
| **Follow-ups**       | Intelligent conversation closure checks and reminders. |
| **Vault**            | Secure storage for API keys, passwords, and secrets. |
| **Apple**            | Native macOS Calendar, Reminders, and Notes integration. |

### How Tools Work

The LLM orchestrator sees a list of all tools along with their **names** and **descriptions**. When a user sends a message, the LLM analyzes it and decides if it needs to call a tool to fulfill the request.

### Anatomy of a Tool

Every tool in Ubot has:
1.  **Name**: A unique snake_case identifier (e.g., `gmail_send`).
2.  **Description**: A clear natural language explanation of what it does.
3.  **Parameters**: A list of structured inputs with types and descriptions.
4.  **Executor**: The actual code that runs when the LLM calls the tool.

### Managing Tools

Go to the **Tools** page in the Ubot Dashboard to:
-   **Check Status**: See which tools are active and configured correctly.
-   **Permissions**: View which tools are "Visitor-Safe" vs "Owner-Only".
-   **Testing**: Test-run any tool directly from the UI.
