export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: {
    title: string;
    items: NavItem[];
  }[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Documentation", href: "/docs/introduction" },
    { title: "Github", href: "https://github.com/Bigmints-com/ubot", external: true },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/introduction" },
        { title: "Quick Start", href: "/docs/quick-start" },
        { title: "Configuration", href: "/docs/configuration" },
      ],
    },
    {
      title: "Architecture",
      items: [
        { title: "LLM-First Engine", href: "/docs/architecture-llm" },
        { title: "Soul System", href: "/docs/soul-system" },
        { title: "Message Flow", href: "/docs/message-flow" },
      ],
    },
    {
      title: "Features",
      items: [
        { title: "Channels", href: "/docs/channels" },
        { title: "Tool Modules", href: "/docs/modules" },
        { title: "Skills", href: "/docs/skills" },
        { title: "MCP Support", href: "/docs/mcp" },
      ],
    },
    {
      title: "Advanced",
      items: [
        { title: "CLI Reference", href: "/docs/cli" },
        { title: "Security & Safety", href: "/docs/security" },
        { title: "Custom Modules", href: "/docs/custom-modules" },
      ],
    },
  ],
};
