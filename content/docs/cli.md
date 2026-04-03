# CLI Reference

The **Ubot CLI** is the primary way to manage the Ubot service and configuration from your terminal.

### Command List

| Command | Description |
| ------- | ----------- |
| `ubot start` | Start Ubot on port 11490 (default). |
| `ubot stop`  | Gracefully shutdown Ubot and its channels. |
| `ubot restart` | Stop and restart the Ubot service. |
| `ubot status` | Show current PID, port, and dashboard URL. |
| `ubot logs`   | Print the last 50 lines of logs. |
| `ubot logs -f` | Tail logs in real-time. |
| `ubot config` | Display the current configuration. |
| `ubot config edit` | Open the config file in your default `$EDITOR`. |
| `ubot config set <k> <v>` | Set a configuration value (e.g., `ubot config set server.port 8080`). |
| `ubot doctor` | Perform a series of health checks (node version, network, DB, etc.). |
| `ubot open` | Open the dashboard in your default browser. |
| `ubot version` | Show the currently installed version. |

### Usage Examples

#### 1. Checking Status
```bash
ubot status
```
Output:
```text
✅ Ubot is running (PID: 14930)
📡 Port: 11490
🌍 Dashboard: http://localhost:11490
```

#### 2. Changing the Port
```bash
ubot config set server.port 8080
ubot restart
```

#### 3. Real-time Debugging
If you're developing custom modules, keep a terminal window open with:
```bash
ubot logs -f
```

### Global vs Local
The `ubot` command is a globally symlinked wrapper for the `ubot-core` runtime. When you run `make install`, it ensures this command is available system-wide.
