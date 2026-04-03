import React from "react";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";
import MermaidChart from "@/components/mermaid-chart";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "content/docs");
  if (!fs.existsSync(docsDir)) return [];

  const files = fs.readdirSync(docsDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: [file.replace(".md", "")],
    }));
}

/** Flatten the sidebar nav into a flat list for prev/next navigation */
function getFlatNav() {
  return docsConfig.sidebarNav.flatMap((group) =>
    group.items.map((item) => ({
      title: item.title,
      href: item.href || "#",
      group: group.title,
    }))
  );
}

/**
 * Extract frontmatter-style description from the first paragraph, and
 * separate the first H1 from the body so we can render them differently.
 */
function parseContent(raw: string) {
  const lines = raw.split("\n");
  let title = "";
  let description = "";
  let bodyStartIndex = 0;

  // Find and extract the first H1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("# ")) {
      title = lines[i].replace(/^#\s+/, "");
      bodyStartIndex = i + 1;
      break;
    }
  }

  // Skip blank lines after the title
  while (
    bodyStartIndex < lines.length &&
    lines[bodyStartIndex].trim() === ""
  ) {
    bodyStartIndex++;
  }

  // Extract first paragraph as description
  if (bodyStartIndex < lines.length && !lines[bodyStartIndex].startsWith("#")) {
    const descLines: string[] = [];
    for (let i = bodyStartIndex; i < lines.length; i++) {
      if (lines[i].trim() === "") break;
      descLines.push(lines[i]);
    }
    description = descLines.join(" ").replace(/\*\*/g, "");
    bodyStartIndex += descLines.length;
  }

  const body = lines.slice(bodyStartIndex).join("\n").trim();

  return { title, description, body };
}

export default async function DocPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug: slugArray } = await props.params;
  const slug = slugArray.join("/");
  const filePath = path.join(process.cwd(), "content/docs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");
  const { title, description, body } = parseContent(content);

  // Derive a display title from slug if no H1 found
  const displayTitle =
    title ||
    slugArray[slugArray.length - 1]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // Find prev/next pages
  const flatNav = getFlatNav();
  const currentHref = `/docs/${slug}`;
  const currentIndex = flatNav.findIndex((item) => item.href === currentHref);
  const prevPage = currentIndex > 0 ? flatNav[currentIndex - 1] : null;
  const nextPage =
    currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null;

  // Find current group
  const currentGroup =
    currentIndex >= 0 ? flatNav[currentIndex].group : undefined;

  return (
    <article>
      {/* Page Header */}
      <div className="mb-10 pb-6 border-b border-border/50">
        {currentGroup && (
          <p className="text-sm font-medium text-primary mb-2">
            {currentGroup}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {displayTitle}
        </h1>
        {description && (
          <p className="text-muted-foreground mt-3 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {/* Markdown Body */}
      <div
        className={cn(
          "prose prose-neutral dark:prose-invert max-w-none",
          // Headings
          "prose-headings:scroll-mt-20",
          "prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3",
          "prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3",
          // Body text
          "prose-p:leading-7 prose-p:text-muted-foreground",
          // Code
          "prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-pre:shadow-sm",
          "prose-code:text-sm prose-code:font-mono",
          "prose-code:before:content-none prose-code:after:content-none",
          // Lists
          "prose-li:text-muted-foreground prose-li:leading-7",
          "prose-ul:my-4 prose-ol:my-4",
          // Links
          "prose-a:text-primary prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/30 hover:prose-a:decoration-primary",
          // Strong
          "prose-strong:text-foreground prose-strong:font-semibold",
          // Blockquote
          "prose-blockquote:border-l-primary/30 prose-blockquote:text-muted-foreground prose-blockquote:not-italic",
          // Table
          "prose-th:text-left prose-th:font-semibold prose-th:border-border/50",
          "prose-td:border-border/50",
          // Hr
          "prose-hr:border-border/50 prose-hr:my-6"
        )}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rehypePlugins={[rehypeHighlight as any]}
          components={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            code(props: any) {
              const { inline, className, children, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");

              if (match && match[1] === "mermaid") {
                return (
                  <MermaidChart
                    chart={String(children).replace(/\n$/, "")}
                  />
                );
              }

              // Inline code
              if (inline || !match) {
                return (
                  <code
                    className="relative rounded-md bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm text-foreground"
                    {...rest}
                  >
                    {children}
                  </code>
                );
              }

              // Fenced code block
              return (
                <code className={className} {...rest}>
                  {children}
                </code>
              );
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </div>

      {/* Prev / Next Navigation */}
      {(prevPage || nextPage) && (
        <nav className="mt-16 pt-6 border-t border-border/50 grid grid-cols-2 gap-4">
          {prevPage ? (
            <Link
              href={prevPage.href}
              className="group flex flex-col items-start p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                <ChevronLeft className="h-3 w-3" /> Previous
              </span>
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {prevPage.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPage ? (
            <Link
              href={nextPage.href}
              className="group flex flex-col items-end p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                Next <ChevronRight className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {nextPage.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
