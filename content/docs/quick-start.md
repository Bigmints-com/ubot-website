# Quick Start

Get Ubot up and running in under 5 minutes.

### 1. Prerequisites

Ensure you have the following installed:
- **Node.js** ≥ 22
- **npm**
- **make** (standard on macOS)
- **macOS** is recommended for iMessage, Calendar, and Apple integration.

### 2. Installation

Clone the repository and run the installation script:

```bash
git clone https://github.com/Bigmints-com/ubot.git
cd ubot
make install
```

The `make install` command handles dependency installation, builds both the backend and frontend dashboard, and symlinks the `ubot` command into your path.

### 3. Launching

Start the application:

```bash
ubot start
```

Once started, the Ubot Dashboard will be available at:  
👉 **[http://localhost:11490](http://localhost:11490)**

### 4. Basic Configuration

To start using Ubot, follow these steps in order:

1.  **Add a Model Provider**: Go to the **LLMs** page in the dashboard and add your API key (Gemini, OpenAI, or Ollama for local usage).  
2.  **Verify Your Model**: Ensure the "default" model is set to the provider you just added.  
3.  **Connect a Messaging Channel**: Go to **WhatsApp** or **Telegram** to link your accounts.  
4.  **Send Your First Message**: Try sending "Hello Ubot!" in any of the connected channels.  

### 5. Common CLI Commands

- `ubot status` — Check if Ubot is running.
- `ubot stop`  — Gracefully stop the service.
- `ubot logs -f` — Monitor real-time logs.
- `ubot doctor` — Perform a health check.
- `ubot version` — Check the current version.
