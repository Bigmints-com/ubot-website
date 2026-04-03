# Custom Modules & Apps

Ubot is highly extensible. You can add new capabilities (Tools) and entire Dashboard Apps by creating a **Custom Tool Module**.

### Module Structure

A custom module is a single TypeScript file (or a directory with an `index.ts`) that exports a `ToolModule` object.

**File Location**: `~/.ubot/custom/modules/<module-name>/index.ts`

### The `ToolModule` Interface

Your module must export a default object matching this structure:

```typescript
interface ToolModule {
  name: string;                    // Module name (e.g., "weather")
  tools: ToolDefinition[];         // Tool definitions for the LLM
  register(registry, ctx): void;   // Register tool executors
  ui?: {                           // Optional: add a dashboard menu item
    title: string;                 // Sidebar label
    icon: string;                  // Lucide icon name (e.g., "Cloud", "Globe")
    href: string;                  // Frontend route (e.g., "/weather")
  };
}
```

### Creating a Module (Step-by-Step)

#### 1. Generate via CLI (Recommended)
You can ask Ubot to build a module for you:
> "Ubot, build a custom module that checks the weather using the OpenWeather API."

Ubot will use its internal `cli_run` tool to generate the code in `custom/staging/weather/`.

#### 2. Test the Module
Before making it live, validate the module structure and tools:
```bash
ubot cli_test_module weather
```

#### 3. Promote to Live
Once tested, promote the module. Ubot will hot-reload it, and the tools will become immediately available to the LLM.
```bash
ubot cli_promote_module weather
```

### Adding a Dashboard UI

If your module includes a `ui` object, Ubot will automatically inject a link into the Dashboard sidebar.

To create the actual page, you can add a Next.js page in `ubot-core/web/app/custom/[module-name]/page.tsx`. However, for most use cases, the LLM-callable tools are sufficient to interact with the capability via chat.

### Best Practices

-   **Prefix Tool Names**: Always prefix your custom tool names with `custom_` (e.g., `custom_check_weather`).
-   **Clear Descriptions**: The LLM relies on your `description` fields to know when to use the tool. Be explicit about parameters and return values.
-   **Security**: Always validate user input. Remember that visitor-safe tools have special restrictions in Ubot.
-   **Dependencies**: If you need external packages, use dynamic `import()` or `child_process`. Do not modify the core `package.json`.
