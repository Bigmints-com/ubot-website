# Soul System (Memory)

The **Soul System** is Ubot's persistent memory and identity layer. It stores data about the owner (you) and every contact you interact with via WhatsApp, Telegram, and iMessage.

### Key Data Points

For each contact, Ubot maintains:
- **Identity**: Name, role, and relationship to the owner.
- **Personality**: Traits, preferences, and quirks.
- **Memories**: A summarized history of contextually relevant facts.
- **Persona Context**: Instructions on how the LLM should respond specifically to this contact.

### How Memory Works

#### 1. Passive Memory (Soul File)
Every contact has a dedicated `SOUL.md` representation in Ubot's memory. This file is injected into the LLM orchestrator's context whenever a message arrives from that contact.

#### 2. Active Memory (Conversations)
The most recent messages (sliding window) are always included in the prompt. This enables multi-turn reasoning and contextual awareness.

### Managing People

Interact with your "Soul" data via the **Memory** page in the Dashboard:

-   **Update Your Identity**: Refine how Ubot perceives you (your name, tone, and goals).
-   **Edit Contacts**: Manually refine a contact's relationship or memories if needed.
-   **Discovery**: Ubot automatically discovers and creates "souls" for new people who message you.

### Memory Tools

You can also manage memory conversationally:
-   **`create_memory`**: Save a specific fact.
-   **`update_soul`**: Change a person's role or personality data.
-   **`search_memory`**: Query the soul system for specific information.

### Privacy & Security

Soul data is stored locally in `~/.ubot/data/memory/` and is never shared with third-party providers except when injected into the LLM prompt for response generation.
