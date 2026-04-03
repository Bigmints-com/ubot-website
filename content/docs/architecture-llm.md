# LLM-First Architecture

Ubot is built around an **LLM-First orchestrator**. Unlike traditional bots that use hardcoded if-else trees or intent mapping, Ubot passes every incoming message directly to a Large Language Model along with a context-rich prompt.

### The Orchestration Loop

1.  **Input Normalization**: Messages from WhatsApp, Telegram, or iMessage are converted into a standardized `Message` object.
2.  **Context Assembly**: Ubot gathers recent conversation history, "Soul" data (memory), and current system state.
3.  **Tool Discovery**: The available tools (80+) are injected into the prompt as function descriptions.
4.  **LLM Decision**: The LLM analyzes the user's intent to decide whether it needs to:
    -   Call a Tool (e.g., `send_message`, `create_event`)
    -   Execute a Skill
    -   Respond conversationally
5.  **Execution & Loop**: If the LLM calls a tool, the result is fed back into the orchestrator for a follow-up response.

### Key Components

- **Orchestrator**: The "brain" that manages the loop.
- **Tools**: Atomic functions that perform actions in the real world.
- **Skills**: High-level instructions that guide the LLM's behavior.
- **Memory**: Persistent storage for soul data and conversation history.

### Purpose-Based Routing

Ubot uses "Purpose-Based Routing" to determine which model to use for which task. You can configure a cheap, fast model (like Gemini Flash) for routing and a more powerful model (like GPT-4o or Claude) for complex reasoning tasks.
