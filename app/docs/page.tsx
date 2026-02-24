import {
  Bot,
  MessageCircle,
  Send,
  Globe,
  Puzzle,
  Shield,
  Zap,
  Github,
  BookOpen,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Info,
  ArrowLeft,
  Settings,
  Terminal,
  Smartphone,
  Key,
  RefreshCw,
  HelpCircle,
  LayoutDashboard,
  Search,
  Calendar,
  Brain,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ─── Reusable Components ────────────────────────────────────────────────── */

function Tip({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-blue-500/30 bg-blue-500/5 text-blue-300",
    warning: "border-amber-500/30 bg-amber-500/5 text-amber-300",
    success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-300",
  };
  const icons = {
    info: <Info className="size-4 shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="size-4 shrink-0 mt-0.5" />,
    success: <CheckCircle className="size-4 shrink-0 mt-0.5" />,
  };
  return (
    <div
      className={`flex gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles[type]}`}
    >
      {icons[type]}
      <div>{children}</div>
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold shrink-0">
        {number}
      </div>
      <div className="space-y-2 pt-0.5">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/80">
          <Icon className="size-5 text-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-secondary/10 p-4">
      <p className="text-sm font-medium text-foreground mb-2 flex items-start gap-2">
        <HelpCircle className="size-4 text-amber-400 shrink-0 mt-0.5" />
        {q}
      </p>
      <p className="text-sm text-muted-foreground pl-6">{a}</p>
    </div>
  );
}

/* ─── Sidebar ────────────────────────────────────────────────────────────── */

const sidebar = [
  { id: "getting-started", label: "Getting Started", icon: Zap },
  { id: "your-settings", label: "Your Settings", icon: Settings },
  { id: "the-dashboard", label: "The Dashboard", icon: LayoutDashboard },
  { id: "connect-whatsapp", label: "Connect WhatsApp", icon: MessageCircle },
  { id: "connect-telegram", label: "Connect Telegram", icon: Send },
  { id: "teach-ubot", label: "Teach Ubot Skills", icon: Puzzle },
  { id: "choose-ai", label: "Choose Your AI Brain", icon: Brain },
  { id: "something-wrong", label: "Something Wrong?", icon: AlertTriangle },
  { id: "terminal-commands", label: "Terminal Commands", icon: Terminal },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="size-4" />
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Bot className="size-4" />
                </div>
                <span className="text-sm font-bold tracking-tight">Ubot</span>
              </a>
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <div className="flex items-center gap-1.5">
              <BookOpen className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Help & Guides
              </span>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/Bigmints-com/ubot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-10 flex gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="sticky top-24 space-y-1">
            {sidebar.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs tracking-wider uppercase"
            >
              <BookOpen className="size-3 mr-1.5" />
              Help & Guides
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Welcome to Ubot 👋
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This guide will help you set up Ubot and get the most out of it.
              No technical expertise needed — just follow the steps.
            </p>
          </div>

          {/* ─── Getting Started ──────────────────────────────── */}
          <Section
            id="getting-started"
            icon={Zap}
            title="Getting Started"
            subtitle="Install Ubot and run it for the first time"
          >
            <p className="text-sm">
              You&apos;ll need a Mac or Linux computer with internet access.
              A friend who&apos;s comfortable with the terminal can help you with the one-time setup —
              after that, everything is point-and-click.
            </p>

            <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-5">
              <p className="text-sm font-semibold text-foreground">
                📋 One-time setup (ask a techie friend if needed)
              </p>
              <Step number={1} title="Download Ubot">
                <p>
                  Open the <strong>Terminal</strong> app and paste this command,
                  then press Enter:
                </p>
                <div className="mt-2 rounded-lg bg-secondary/40 px-4 py-2.5 font-mono text-xs">
                  git clone https://github.com/Bigmints-com/ubot.git && cd ubot
                </div>
              </Step>
              <Step number={2} title="Install everything">
                <p>This downloads what Ubot needs and sets it up:</p>
                <div className="mt-2 rounded-lg bg-secondary/40 px-4 py-2.5 font-mono text-xs">
                  make deps && make install
                </div>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  ☕ This takes a few minutes. Grab a coffee.
                </p>
              </Step>
              <Step number={3} title="Start Ubot">
                <div className="rounded-lg bg-secondary/40 px-4 py-2.5 font-mono text-xs">
                  ubot start
                </div>
              </Step>
              <Step number={4} title="Open the dashboard">
                <p>
                  Open your web browser and go to:{" "}
                  <strong className="text-emerald-400">
                    http://localhost:11490
                  </strong>
                </p>
              </Step>
            </div>

            <Tip type="success">
              🎉 That&apos;s it! Ubot is now running. The dashboard is where you
              control everything from now on.
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Your Settings ────────────────────────────────── */}
          <Section
            id="your-settings"
            icon={Settings}
            title="Your Settings"
            subtitle="How to customize Ubot to your needs"
          >
            <p className="text-sm">
              All your settings live in one place. You can change them from the
              dashboard or by editing a settings file.
            </p>

            <div className="rounded-xl border border-border/50 bg-card/30 p-5 space-y-3">
              <p className="text-sm font-semibold text-foreground">
                🎛️ The easiest way: use the Dashboard
              </p>
              <p className="text-sm">
                Open the dashboard → click <strong>Settings</strong> in the sidebar →
                change what you need → click <strong>Save</strong>.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/30 p-5 space-y-4">
              <p className="text-sm font-semibold text-foreground">
                📝 What each setting does
              </p>
              <div className="grid gap-3">
                {[
                  {
                    icon: Globe,
                    name: "Port",
                    what: "The address Ubot runs on. Default is 11490. Change if something else uses that number.",
                  },
                  {
                    icon: Key,
                    name: "AI API Key",
                    what: "Your access code for the AI brain. You get this from Google AI Studio, OpenAI, or another provider. Without it, Ubot can't think.",
                  },
                  {
                    icon: Brain,
                    name: "AI Model",
                    what: "Which AI to use. \"gemini-2.0-flash\" is fast and affordable. \"gpt-4o\" is smarter but costs more.",
                  },
                  {
                    icon: Search,
                    name: "Web Search Key",
                    what: "Optional. Lets Ubot search the web for answers. Get a free one from serper.dev.",
                  },
                  {
                    icon: MessageCircle,
                    name: "WhatsApp",
                    what: "Turn on/off WhatsApp integration. Connect by scanning a QR code.",
                  },
                  {
                    icon: Send,
                    name: "Telegram",
                    what: "Turn on/off Telegram integration. Needs a bot token (explained below).",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20"
                  >
                    <item.icon className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.what}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Tip type="info">
              After changing settings, restart Ubot by running{" "}
              <code className="font-mono text-xs bg-secondary/50 px-1 py-0.5 rounded">
                ubot restart
              </code>{" "}
              in the terminal, or simply restart from the dashboard.
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── The Dashboard ────────────────────────────────── */}
          <Section
            id="the-dashboard"
            icon={LayoutDashboard}
            title="The Dashboard"
            subtitle="Your control center — everything at a glance"
          >
            <p className="text-sm">
              The dashboard is a website that runs on your computer. Open it at{" "}
              <strong className="text-emerald-400">
                http://localhost:11490
              </strong>{" "}
              whenever Ubot is running. Here&apos;s what each page does:
            </p>

            <div className="grid gap-3">
              {[
                {
                  emoji: "🏠",
                  name: "Home",
                  what: "Quick overview — is Ubot running? How many messages today? System health.",
                },
                {
                  emoji: "💬",
                  name: "Command Center",
                  what: "Chat with Ubot directly from your browser. Great for testing or quick tasks.",
                },
                {
                  emoji: "🧠",
                  name: "Skills",
                  what: "See and manage what Ubot has learned to do automatically.",
                },
                {
                  emoji: "📅",
                  name: "Scheduler",
                  what: "View upcoming tasks, reminders, and recurring jobs Ubot will run.",
                },
                {
                  emoji: "🎭",
                  name: "Personas",
                  what: "Control how Ubot talks — formal, casual, funny, professional.",
                },
                {
                  emoji: "⚙️",
                  name: "Settings",
                  what: "Change your AI provider, API keys, port, and other preferences.",
                },
                {
                  emoji: "📱",
                  name: "WhatsApp",
                  what: "Connect or disconnect WhatsApp. Scan QR code here.",
                },
                {
                  emoji: "✈️",
                  name: "Telegram",
                  what: "Connect or disconnect your Telegram bot.",
                },
                {
                  emoji: "📋",
                  name: "Logs",
                  what: "See what Ubot is doing behind the scenes. Useful if something isn't working.",
                },
              ].map((page) => (
                <div
                  key={page.name}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border/30"
                >
                  <span className="text-lg shrink-0">{page.emoji}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {page.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {page.what}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Connect WhatsApp ─────────────────────────────── */}
          <Section
            id="connect-whatsapp"
            icon={MessageCircle}
            title="Connect WhatsApp"
            subtitle="Chat with Ubot through WhatsApp"
          >
            <p className="text-sm">
              Ubot uses your existing WhatsApp account — no business account or
              extra phone number needed.
            </p>

            <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-5">
              <Step number={1} title="Open the WhatsApp page">
                <p>
                  In the dashboard sidebar, click <strong>WhatsApp</strong>. A QR
                  code will appear.
                </p>
              </Step>
              <Step number={2} title="Open WhatsApp on your phone">
                <p>
                  Go to <strong>Settings</strong> →{" "}
                  <strong>Linked Devices</strong> →{" "}
                  <strong>Link a Device</strong>.
                </p>
              </Step>
              <Step number={3} title="Scan the QR code">
                <p>
                  Point your phone at the QR code on your screen. It connects
                  in a few seconds.
                </p>
              </Step>
              <Step number={4} title="You're connected! ✅">
                <p>
                  The status will change to <strong>Connected</strong>. Now anyone who messages
                  you on WhatsApp can interact with Ubot.
                </p>
              </Step>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/30 p-5">
              <p className="text-sm font-semibold text-foreground mb-3">
                💡 What can Ubot do on WhatsApp?
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Read and reply to messages from your contacts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Send messages on your behalf (asks your permission first)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Share files and documents
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Run your automated skills when messages arrive
                </li>
              </ul>
            </div>

            <Tip type="warning">
              If WhatsApp disconnects (this can happen if your phone is offline
              for a long time), just go back to the WhatsApp page and scan the
              QR code again.
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Connect Telegram ─────────────────────────────── */}
          <Section
            id="connect-telegram"
            icon={Send}
            title="Connect Telegram"
            subtitle="Chat with Ubot through a Telegram bot"
          >
            <p className="text-sm">
              Unlike WhatsApp, Telegram uses a separate &quot;bot&quot; account. Your
              personal messages stay private — the bot is a separate chat.
            </p>

            <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-5">
              <Step number={1} title="Create a bot on Telegram">
                <p>
                  Open Telegram and search for <strong>@BotFather</strong>.
                  Send it the message <code className="text-xs bg-secondary/50 px-1.5 py-0.5 rounded">/newbot</code>.
                  Follow the prompts to pick a name for your bot.
                </p>
              </Step>
              <Step number={2} title="Copy the bot token">
                <p>
                  BotFather will give you a long code (the &quot;token&quot;). It looks
                  like: <code className="text-xs bg-secondary/50 px-1.5 py-0.5 rounded">7123456789:AAF...</code>
                  <br />
                  Copy this — you&apos;ll need it in the next step.
                </p>
              </Step>
              <Step number={3} title="Paste it in the dashboard">
                <p>
                  Go to the <strong>Telegram</strong> page in your dashboard, paste
                  the token, and click <strong>Connect</strong>.
                </p>
              </Step>
              <Step number={4} title="Say hello to your bot">
                <p>
                  Open Telegram, find your new bot, and send it a message.
                  Ubot will recognize you as the owner automatically. 🎉
                </p>
              </Step>
            </div>

            <Tip type="info">
              Other people can also message your bot! Ubot will respond to them
              too, but with limited access (they can&apos;t read your emails or files).
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Teach Ubot Skills ────────────────────────────── */}
          <Section
            id="teach-ubot"
            icon={Puzzle}
            title="Teach Ubot Skills"
            subtitle="Automate things by telling Ubot what to do"
          >
            <p className="text-sm">
              Skills are like little recipes: <strong>&quot;When this happens → do
              that.&quot;</strong> The easiest way to create one is to just ask.
            </p>

            <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-4">
              <p className="text-sm font-semibold text-foreground">
                💬 Just tell Ubot what you want
              </p>
              <p className="text-sm">
                Open the <strong>Command Center</strong> and type something like:
              </p>
              <div className="space-y-3">
                {[
                  "When someone asks about our business hours on WhatsApp, reply: We're open Mon–Fri, 9am to 6pm.",
                  "Every morning at 9am, check my email and send me a summary on Telegram.",
                  "When a customer messages me on WhatsApp, greet them politely and ask how you can help.",
                  "If anyone asks for our menu, send them this link: example.com/menu",
                ].map((example) => (
                  <div
                    key={example}
                    className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30"
                  >
                    <ChevronRight className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm italic">&quot;{example}&quot;</p>
                  </div>
                ))}
              </div>
              <p className="text-sm">
                Ubot will create the skill for you and confirm what it learned.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/30 p-5">
              <p className="text-sm font-semibold text-foreground mb-3">
                🔧 Managing skills from the dashboard
              </p>
              <p className="text-sm">
                Go to the <strong>Skills</strong> page to see all your active
                skills. From there you can:
              </p>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Turn skills on or off
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Edit what they do
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  Delete ones you no longer need
                </li>
              </ul>
            </div>

            <Tip type="success">
              You don&apos;t need to write code. Just describe what you want in
              plain English and Ubot figures out the rest.
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Choose Your AI Brain ─────────────────────────── */}
          <Section
            id="choose-ai"
            icon={Brain}
            title="Choose Your AI Brain"
            subtitle="Pick the AI that thinks for Ubot"
          >
            <p className="text-sm">
              Ubot needs an &quot;AI brain&quot; to understand your messages. Think of
              it like choosing which engine goes in your car. Here are your options:
            </p>

            <div className="grid gap-3">
              {[
                {
                  name: "🌟 Google Gemini",
                  rec: "Recommended",
                  desc: "Fast, affordable, and has a generous free tier. Perfect to start with.",
                  how: "Go to aistudio.google.com → click \"Get API Key\" → copy the key.",
                },
                {
                  name: "🧠 OpenAI (ChatGPT)",
                  rec: "Premium",
                  desc: "GPT-4o is very smart. Costs a bit more but gives excellent results.",
                  how: "Go to platform.openai.com → API Keys → create a new key.",
                },
                {
                  name: "🏠 Ollama (runs on your computer)",
                  rec: "Free & Private",
                  desc: "Runs completely offline. No data leaves your machine. Needs a powerful computer.",
                  how: "Install from ollama.com → run 'ollama pull llama3' in terminal.",
                },
              ].map((provider) => (
                <div
                  key={provider.name}
                  className="rounded-xl border border-border/50 bg-card/30 p-5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">
                      {provider.name}
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      {provider.rec}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{provider.desc}</p>
                  <p className="text-xs text-muted-foreground/70">
                    <strong>How to get it:</strong> {provider.how}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/50 bg-card/30 p-5 space-y-3">
              <p className="text-sm font-semibold text-foreground">
                📋 How to add your AI provider
              </p>
              <div className="space-y-4">
                <Step number={1} title="Open Settings">
                  <p>
                    In the dashboard, click <strong>Settings</strong> in the sidebar.
                  </p>
                </Step>
                <Step number={2} title="Go to LLM Providers">
                  <p>Click the <strong>LLM Providers</strong> tab.</p>
                </Step>
                <Step number={3} title="Add your provider">
                  <p>
                    Click <strong>Add Provider</strong>, give it a name, paste your
                    API key, and choose the model.
                  </p>
                </Step>
                <Step number={4} title="Set as default">
                  <p>
                    Click the ⭐ star icon to make it the default brain Ubot uses.
                  </p>
                </Step>
              </div>
            </div>

            <Tip type="info">
              You can add multiple AI providers and switch between them anytime.
              Use a fast one for simple tasks and a smart one for complex questions.
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Something Wrong? ─────────────────────────────── */}
          <Section
            id="something-wrong"
            icon={AlertTriangle}
            title="Something Wrong?"
            subtitle="Quick fixes for common issues"
          >
            <p className="text-sm">
              Don&apos;t worry — most problems have simple solutions. Find yours below:
            </p>

            <div className="space-y-3">
              <FaqItem
                q="Ubot isn't replying to my messages"
                a="Your AI key might be missing or expired. Go to Settings → LLM Providers and make sure you have a valid API key set as default. If you just installed Ubot, you need to add an API key first."
              />
              <FaqItem
                q="WhatsApp got disconnected"
                a="This happens if your phone stayed offline for too long. Go to the WhatsApp page in the dashboard and scan the QR code again — it takes 10 seconds."
              />
              <FaqItem
                q="Telegram is sending duplicate messages"
                a="This usually means two copies of Ubot are running at the same time. Open Terminal, type 'ubot stop', wait a moment, then type 'ubot start' again."
              />
              <FaqItem
                q="The dashboard won't open"
                a="Make sure Ubot is running. Open Terminal and type 'ubot status' to check. If it says 'not running', type 'ubot start'."
              />
              <FaqItem
                q="I changed a setting but nothing happened"
                a="You need to restart after changing settings. Open Terminal and type 'ubot restart'."
              />
              <FaqItem
                q="How do I update Ubot?"
                a="Open Terminal, go to the ubot folder, and run: git pull && make install && ubot restart. This downloads the latest version and restarts."
              />
              <FaqItem
                q="How do I see what Ubot is doing?"
                a="Go to the Logs page in the dashboard, or open Terminal and type 'ubot logs'. This shows you exactly what Ubot is thinking and doing."
              />
              <FaqItem
                q="Can I use Ubot on my phone?"
                a="The dashboard works in any mobile browser! Just open localhost:11490 on a device connected to the same network. Or simply use WhatsApp/Telegram to interact with Ubot directly."
              />
            </div>

            <Tip type="info">
              Still stuck? Visit our{" "}
              <a
                href="https://github.com/Bigmints-com/ubot/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                GitHub page
              </a>{" "}
              and describe your problem — we&apos;ll help you out.
            </Tip>
          </Section>

          <Separator className="mb-16" />

          {/* ─── Terminal Commands ─────────────────────────────── */}
          <Section
            id="terminal-commands"
            icon={Terminal}
            title="Terminal Commands"
            subtitle="For when you need the command line"
          >
            <p className="text-sm">
              Most things can be done from the dashboard, but sometimes it&apos;s
              faster to type a command in Terminal. Here&apos;s your cheat sheet:
            </p>

            <div className="rounded-xl border border-border/50 bg-secondary/20 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30 bg-secondary/30">
                    <th className="text-left px-4 py-2.5 font-medium text-foreground">
                      Type this
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-foreground">
                      What it does
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {[
                    { cmd: "ubot start", desc: "Turn on Ubot" },
                    { cmd: "ubot stop", desc: "Turn off Ubot" },
                    { cmd: "ubot restart", desc: "Turn off and on again (fixes most issues)" },
                    { cmd: "ubot status", desc: "Check if Ubot is running" },
                    { cmd: "ubot logs", desc: "See what Ubot did recently" },
                    { cmd: "ubot open", desc: "Open the dashboard in your browser" },
                    { cmd: "ubot doctor", desc: "Check if everything is set up correctly" },
                    { cmd: "ubot version", desc: "See which version you have" },
                  ].map((row) => (
                    <tr
                      key={row.cmd}
                      className="hover:bg-secondary/20 transition-colors"
                    >
                      <td className="px-4 py-2.5 font-mono text-xs text-emerald-400 whitespace-nowrap">
                        {row.cmd}
                      </td>
                      <td className="px-4 py-2.5 text-muted-foreground text-sm">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Tip type="success">
              Pro tip: if something isn&apos;t working, just run{" "}
              <code className="font-mono text-xs bg-secondary/50 px-1 py-0.5 rounded">
                ubot restart
              </code>
              {" "}— it fixes most problems!
            </Tip>
          </Section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Need more help? Visit our{" "}
              <a
                href="https://github.com/Bigmints-com/ubot/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub page
              </a>{" "}
              or run{" "}
              <code className="text-xs bg-secondary/50 px-1.5 py-0.5 rounded font-mono">
                ubot doctor
              </code>{" "}
              in Terminal.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
