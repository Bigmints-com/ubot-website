# Skills

**Skills** are custom automations defined as Markdown files with YAML frontmatter. They provide high-level instructions that guide the LLM's behavior in specific scenarios.

### Skill Structure

A skill file (e.g., `greeting.md`) consists of two parts:
1.  **Frontmatter**: Meta-data, triggers, and filters.
2.  **Instructions**: Detailed guidance for the LLM.

**File Location**: `~/.ubot/skills/<skill-name>/SKILL.md`

### YAML Frontmatter

```yaml
name: Greeting
description: Respond to greetings warmly
triggers: [message]
filter_dms_only: true
condition: "the message is a greeting like hi, hello, hey"
outcome: reply
enabled: true
```

-   **`triggers`**: What event should activate this skill. (Currently only `message` is supported).
-   **`condition`**: A natural language description of when the skill should run.
-   **`outcome`**: The primary goal of the skill (e.g., `reply`, `tool_call`).
-   **`enabled`**: If `false`, the skill will be ignored.

### Instructions

The Markdown body contains the instructions for the LLM:

```markdown
# Instructions
Respond warmly and ask how you can help today.
Mention the person's name if you know it from the "Soul" data.
If they ask for specific help, acknowledge it and proceed.
```

### Creating Skills

You can create skills in three ways:

1.  **Dashboard**: Go to the **Skills** page and use the visual editor.
2.  **Conversational**: Ask Ubot to create a skill for you:
    > "Ubot, create a skill that always reminds me to drink water when I say 'I'm thirsty'."
3.  **Manual**: Write the `SKILL.md` file directly in `~/.ubot/skills/`.

### How Skills work

Skills are *injected* as context into the LLM prompt when their conditions match. The LLM decides whether and how to follow them based on the conversation flow. This differs from traditional if-else logic; it's **probabilistic and context-aware**.
