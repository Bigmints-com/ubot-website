# Security & Safety

Ubot is designed with **privacy-first** and **safety** principles in mind. As a self-hosted application, you have full control over who can interact with it and what actions it can perform.

### Security Boundaries

#### 1. Sandbox
The LLM orchestrator is sandboxed to specific directories (e.g., `~/Documents`, `~/Downloads`). It cannot read or write to any path outside these without your explicit approval.

#### 2. Localhost-Only Dashboard
The Ubot Dashboard is served locally on port 11490 and is not exposed to the public internet by default. If you need remote access, it's recommended to use a secure tunnel (e.g., Tailscale or SSH tunneling).

### Safety & Visitor Restrictions

Ubot differentiates between the **Owner** (you) and **Visitors** (everyone else).

-   **Visitor-Safe Tools**: Only non-destructive tools (e.g., `web_search`, `gmail_search`) are allowed for visitors.
-   **Owner-Only Tools**: Powerful tools (e.g., `cli_run`, `file_write`, `gmail_send`) are restricted to the owner by default.
-   **Approval Workflow**: You can configure Ubot to ask for your permission before performing sensitive actions for visitors.

### API Keys & Secrets

Ubot uses a secure **Vault** system to manage your LLM provider and integration credentials.

-   **Environment Variables**: You can also provide API keys via environment variables on startup.
-   **Config Security**: The `config.json` file is protected by your system's filesystem permissions.

### Privacy Policy

Ubot's data never leaves your machine unless you:
1.  **Interact with an LLM Provider**: Your messages and context are sent to the provider you've configured.
2.  **Explicitly Opt-in**: To specific third-party integrations (e.g., Google or WhatsApp).

By default, Ubot collects **no telemetry**.
