# Messaging Channels

Ubot connects to your messaging apps through a **Unified Normalized Message Flow**. This architecture allows the LLM orchestrator to handle requests consistently regardless of whether they arrive from WhatsApp, Telegram, or iMessage.

### Supported Channels

#### 1. WhatsApp
Ubot uses a self-hosted, Baileys-based connection. No official WhatsApp Business API or external accounts are required.
- **Setup**: Scan the QR code in the Ubot Dashboard via your phone's WhatsApp app (Linked Devices).

#### 2. Telegram
Ubot connects to your personal Telegram account via a standard Telegram Bot.
- **Setup**: Create a bot via [@BotFather](https://t.me/BotFather) and enter the token into the Ubot Dashboard.

#### 3. iMessage (macOS Only)
Ubot integrates with iMessage via a [BlueBubbles](https://bluebubbles.app/) server.
- **Setup**: Install BlueBubbles on your Mac, and enter your server URL and password into the Ubot Dashboard.

### Key Features per Channel

| Feature | WhatsApp | Telegram | iMessage |
| ------- | :------: | :------: | :------: |
| Text Messages | ✅ | ✅ | ✅ |
| Media (Images/Video) | ✅ | ✅ | ✅ |
| Group Chats | ✅ | ✅ | ✅ |
| Read Receipts | ✅ | ✅ | ✅ |
| Auto-Replies | ✅ | ✅ | ✅ |

### Channel-Specific Settings

Configure your channels in the **Dashboard** under **Settings → Channels**:

- **`auto_reply`**: If enabled, the LLM will automatically analyze and respond to every incoming message.
- **`owner_detection`**: If enabled, Ubot will treat your primary phone/username as the "Owner" with full tool access.
- **`visitor_safe`**: If enabled, Ubot will only allow non-destructive actions for anyone other than the owner.

### Unified Message Flow

Every message is transformed into a standard format before reaching the orchestrator:

```typescript
{
  id: string;
  from: string;      // Phone number or username
  sender_name: string;
  text: string;
  channel: 'whatsapp' | 'telegram' | 'imessage' | 'web';
  timestamp: Date;
}
```
This means your **Skills** and **Tools** work exactly the same across all messaging apps.
