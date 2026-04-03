"use client"

import * as React from "react"
import { Bot } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/docs/introduction",
      items: [
        { title: "Introduction", url: "/docs/introduction" },
        { title: "Quick Start", url: "/docs/quick-start" },
        { title: "Configuration", url: "/docs/configuration" },
      ],
    },
    {
      title: "Architecture",
      url: "/docs/architecture-llm",
      items: [
        { title: "LLM-First Engine", url: "/docs/architecture-llm" },
        { title: "Soul System", url: "/docs/soul-system" },
        { title: "Message Flow", url: "/docs/message-flow" },
      ],
    },
    {
      title: "Features",
      url: "/docs/channels",
      items: [
        { title: "Channels", url: "/docs/channels" },
        { title: "Tool Modules", url: "/docs/modules" },
        { title: "Skills", url: "/docs/skills" },
        { title: "MCP Support", url: "/docs/mcp" },
      ],
    },
    {
      title: "Advanced",
      url: "/docs/cli",
      items: [
        { title: "CLI Reference", url: "/docs/cli" },
        { title: "Security & Safety", url: "/docs/security" },
        { title: "Custom Modules", url: "/docs/custom-modules" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Bot className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Ubot</span>
                  <span className="">Developer Docs</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === subItem.url}
                        >
                          <Link href={subItem.url}>{subItem.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
