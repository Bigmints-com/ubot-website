# Configuration

Ubot's behavior is controlled by a central `config.json` file. While it's recommended to update your settings through the **Dashboard**, you can also edit this file directly or use the `ubot config` CLI tool.

### Config Location

| Purpose | Location |
| ------- | -------- |
| Main Config | `~/.ubot/config.json` |
| Database | `~/.ubot/data/ubot.db` |
| Skills | `~/.ubot/skills/` |

### Key Settings

#### 1. Models & LLM Providers

This is the most critical section of your configuration. Ubot supports any OpenAI-compatible provider.

**Example Provider Configuration:**
```json
"capabilities": {
  "models": {
    "default": "gemini",
    "providers": {
      "gemini": {
        "baseUrl": "https://generativelanguage.googleapis.com/v1beta/openai/",
        "model": "gemini-2.0-flash",
        "apiKey": "YOUR_API_KEY"
      },
      "openai": {
        "baseUrl": "https://api.openai.com/v1",
        "model": "gpt-4o",
        "apiKey": "YOUR_API_KEY"
      },
      "ollama": {
        "baseUrl": "http://localhost:11434/v1",
        "model": "llama3.3"
      }
    }
  }
}
```

#### 2. Messaging Channels

Enable or disable individual message channels and configure auto-replies.

```json
"channels": {
  "whatsapp": { "enabled": true, "auto_reply": true },
  "telegram": { "enabled": true, "token": "YOUR_BOT_TOKEN", "auto_reply": true },
  "imessage": { "enabled": false, "server_url": "", "password": "" }
}
```

- **`enabled`**: If `true`, the channel will attempt to connect on startup.
- **`auto_reply`**: If `true`, the LLM will automatically respond to all incoming messages through this channel.

#### 3. Filesystem

Ubot is sandboxed to specific directories for security and privacy.

```json
"filesystem": {
  "allowed_paths": [
    "~/Documents",
    "~/Downloads",
    "~/Desktop",
    "~/Projects/your-work-dir"
  ]
}
```

Paths must be absolute or start with `~/`. The LLM orchestrator will not be able to read or write files outside these directories.

#### 4. Soul System (Identity)

Your identity and name are used for persona-based conversation.

```json
"owner": {
  "name": "Alex",
  "phone": "91XXXXXXXXXX",
  "telegram_username": "@alex_dev"
}
```

### Command Line Interface (CLI)

Use the built-in CLI for quick configuration updates:

- `ubot config edit` — Open config in your default editor.
- `ubot config set <key> <value>` — Set a specific key (e.g., `ubot config set owner.name Alex`).
- `ubot config get <key>` — Read a value.
- `ubot config` — Show the full current configuration.
