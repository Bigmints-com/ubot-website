import {
  Bot,
  MessageCircle,
  Send,
  Globe,
  Mail,
  FolderOpen,
  Puzzle,
  Clock,
  Zap,
  ArrowRight,
  Terminal,
  Brain,
  Shield,
  Sparkles,
  Github,
  Headset,
  Settings,
  Users,
  CalendarCheck,
  FileText,
  BarChart3,
  UserCircle,
  Heart,
  ShoppingCart,
  Download,
  Copy,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp & Telegram",
    description:
      "Chat with your AI assistant through the messaging apps you already use. Full multi-turn conversations with context awareness.",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Globe,
    title: "Browser Automation",
    description:
      "Control a headless browser to navigate, scrape, and interact with any website. Puppeteer-powered with smart popup dismissal.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Mail,
    title: "Email Management",
    description:
      "Read, compose, forward, and manage Gmail conversations. Full Google Workspace integration with OAuth2 security.",
    gradient: "from-red-500/20 to-orange-500/10",
    iconColor: "text-red-400",
  },
  {
    icon: FolderOpen,
    title: "File Management",
    description:
      "Search, read, and send files from your local machine right through chat. Share documents instantly via WhatsApp or Telegram.",
    gradient: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Puzzle,
    title: "Extensible Skills",
    description:
      "Modular skill framework lets you add new capabilities with ease. Each skill has its own tools, triggers, and AI instructions.",
    gradient: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description:
      "Schedule tasks with natural language. Set reminders, recurring jobs, and proactive check-ins powered by cron and chrono-node.",
    gradient: "from-cyan-500/20 to-teal-500/10",
    iconColor: "text-cyan-400",
  },
];

const steps = [
  {
    step: "01",
    icon: Terminal,
    title: "Connect",
    description:
      "Link your WhatsApp or Telegram account. Scan a QR code and you're ready in seconds.",
  },
  {
    step: "02",
    icon: Brain,
    title: "Command",
    description:
      "Send natural language requests. The LLM brain understands context, intent, and decides which skills to use.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Automate",
    description:
      "Watch Ubot take action — browse the web, send emails, manage files, and report back with results.",
  },
];

const integrations = [
  "WhatsApp",
  "Telegram",
  "Gmail",
  "Google Sheets",
  "Google Drive",
  "Puppeteer",
  "DuckDuckGo",
  "OpenAI",
  "Anthropic",
  "Ollama",
  "Node.js",
  "SQLite",
];

const useCases = [
  {
    id: "front-office",
    icon: Headset,
    title: "Front Office Assistant",
    subtitle: "Customer-facing interactions, automated",
    description:
      "Let Ubot handle incoming inquiries, appointment bookings, and customer support across WhatsApp and Telegram — so you never miss a lead.",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/5",
    glowColor: "oklch(0.6 0.2 160 / 15%)",
    iconColor: "text-emerald-400",
    borderAccent: "hover:border-emerald-500/30",
    bullets: [
      { icon: MessageCircle, text: "Auto-reply to customer messages 24/7" },
      { icon: CalendarCheck, text: "Book appointments via natural conversation" },
      { icon: FileText, text: "Share catalogs, menus, and price lists on demand" },
      { icon: Users, text: "Route complex queries to the right team member" },
    ],
    chat: {
      userLabel: "Customer via WhatsApp",
      userMsg: "Hi, I'd like to book a table for 4 this Friday at 8pm",
      botMsg:
        "Great choice! I've reserved a table for 4 this Friday at 8:00 PM. 🍽️ You'll receive a confirmation shortly. Would you like to see our weekend specials?",
    },
  },
  {
    id: "back-office",
    icon: Settings,
    title: "Back Office Assistant",
    subtitle: "Operations and admin on autopilot",
    description:
      "Automate repetitive back-office tasks — from email triage and report generation to data entry and file management — all through simple chat commands.",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/5",
    glowColor: "oklch(0.5 0.2 264 / 15%)",
    iconColor: "text-blue-400",
    borderAccent: "hover:border-blue-500/30",
    bullets: [
      { icon: Mail, text: "Triage and categorize incoming emails" },
      { icon: BarChart3, text: "Generate daily/weekly reports from your data" },
      { icon: FolderOpen, text: "Organize and archive files automatically" },
      { icon: Globe, text: "Scrape competitor pricing and market data" },
    ],
    chat: {
      userLabel: "You via Telegram",
      userMsg: "Summarize today's unread emails and flag anything urgent",
      botMsg:
        "Done! You have 12 unread emails. 🚨 2 flagged as urgent: an overdue invoice from Acme Corp and a contract deadline reminder for Friday. I've moved the rest to categories.",
    },
  },
  {
    id: "personal-assistant",
    icon: UserCircle,
    title: "Personal Assistant",
    subtitle: "Interact with others on your behalf",
    description:
      "Ubot acts as your personal proxy — replying to friends, managing your social obligations, handling shopping lists, and keeping your life organized with your personality.",
    gradient: "from-violet-500/20 via-purple-500/10 to-pink-500/5",
    glowColor: "oklch(0.5 0.2 300 / 15%)",
    iconColor: "text-violet-400",
    borderAccent: "hover:border-violet-500/30",
    bullets: [
      { icon: Heart, text: "Reply to friends and family in your style" },
      { icon: ShoppingCart, text: "Manage shopping lists and place orders" },
      { icon: CalendarCheck, text: "RSVP to events and manage your calendar" },
      { icon: Send, text: "Forward important updates to the right people" },
    ],
    chat: {
      userLabel: "Friend via WhatsApp",
      userMsg: "Hey! Are you coming to the BBQ on Saturday?",
      botMsg:
        "Hey! 👋 Yep, count me in! I'll bring dessert. What time should I be there? Can't wait! 🎉",
    },
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Bot className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Ubot</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Use Cases
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              How It Works
            </a>
            <a
              href="#quick-start"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Quick Start
            </a>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-500/8 via-blue-500/5 to-cyan-500/8 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-500/5 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <div className="animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-xs font-medium tracking-wider uppercase"
            >
              <Sparkles className="size-3 mr-1.5" />
              AI-Powered Automation
            </Badge>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your Personal
            <br />
            <span className="gradient-text">AI Assistant</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Automate your digital life through natural conversations. Connect
            WhatsApp, Telegram, Gmail, and more — all orchestrated by a
            powerful LLM brain that thinks, decides, and acts on your behalf.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 text-base" asChild>
              <a
                href="https://github.com/Bigmints-com/ubot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 text-base"
              asChild
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>

          {/* Hero visual */}
          <div className="animate-fade-in-up delay-500 mt-16 mx-auto max-w-2xl">
            <div className="glass-card glow rounded-2xl p-6 md:p-8 animate-float">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-500/20 shrink-0">
                  <MessageCircle className="size-5 text-green-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">
                    You via WhatsApp
                  </p>
                  <div className="bg-secondary/50 rounded-xl px-4 py-2.5 inline-block">
                    <p className="text-sm">
                      Check my email for any flight confirmations and forward
                      them to my travel folder
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-violet-500/20 shrink-0 animate-pulse-glow">
                  <Bot className="size-5 text-violet-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Ubot</p>
                  <div className="bg-secondary/50 rounded-xl px-4 py-2.5 inline-block">
                    <p className="text-sm">
                      Found 2 flight confirmations from Emirates. Forwarded
                      both to your Travel folder. ✈️ Your Dubai flight departs
                      March 5 at 14:30.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs tracking-wider uppercase"
            >
              Capabilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything You Need
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground text-lg">
              A modular skill framework that grows with you. Each capability is
              a plug-and-play module with its own AI instructions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card
                key={feature.title}
                className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardHeader className="relative pb-3">
                  <div
                    className={`flex size-11 items-center justify-center rounded-lg bg-secondary/80 mb-3 ${feature.iconColor}`}
                  >
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Use Cases Section */}
      <section id="use-cases" className="relative py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-emerald-500/5 via-blue-500/3 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-violet-500/5 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs tracking-wider uppercase"
            >
              Use Cases
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              One Bot,{" "}
              <span className="gradient-text">Endless Possibilities</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              From handling customers to managing operations to being your
              personal proxy — Ubot adapts to every role.
            </p>
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, i) => (
              <div
                key={useCase.id}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm ${useCase.borderAccent} transition-all duration-500 animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-6 md:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left: Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`flex size-12 items-center justify-center rounded-xl bg-secondary/80 ${useCase.iconColor}`}
                        >
                          <useCase.icon className="size-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            {useCase.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {useCase.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {useCase.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {useCase.bullets.map((bullet) => (
                          <div
                            key={bullet.text}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors"
                          >
                            <bullet.icon className={`size-4 mt-0.5 shrink-0 ${useCase.iconColor}`} />
                            <span className="text-sm text-muted-foreground">
                              {bullet.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Chat preview */}
                    <div className="lg:pl-4">
                      <div
                        className="glass-card rounded-xl p-5"
                        style={{
                          boxShadow: `0 0 30px ${useCase.glowColor}`,
                        }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex size-8 items-center justify-center rounded-full bg-green-500/20 shrink-0">
                            <MessageCircle className="size-4 text-green-400" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">
                              {useCase.chat.userLabel}
                            </p>
                            <div className="bg-secondary/50 rounded-lg px-3 py-2 inline-block">
                              <p className="text-sm">
                                {useCase.chat.userMsg}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex size-8 items-center justify-center rounded-full bg-violet-500/20 shrink-0`}
                          >
                            <Bot className="size-4 text-violet-400" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">
                              Ubot
                            </p>
                            <div className="bg-secondary/50 rounded-lg px-3 py-2 inline-block">
                              <p className="text-sm">
                                {useCase.chat.botMsg}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs tracking-wider uppercase"
            >
              Getting Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground text-lg">
              Three simple steps from installation to full automation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`text-center animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <div className="relative mx-auto mb-6">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary/80 mx-auto glass-card">
                    <step.icon className="size-7 text-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-mono font-bold text-muted-foreground bg-background border border-border rounded-full size-7 flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Quick Start Section */}
      <section id="quick-start" className="relative py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-green-500/5 via-emerald-500/3 to-cyan-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs tracking-wider uppercase"
            >
              <Download className="size-3 mr-1.5" />
              Installation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Up and Running in{" "}
              <span className="gradient-text">Under 5 Minutes</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground text-lg">
              Clone, build, install, and start — four commands is all it takes.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {/* Terminal window */}
            <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/20">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/60" />
                  <div className="size-3 rounded-full bg-yellow-500/60" />
                  <div className="size-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">
                  Terminal
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 space-y-6 font-mono text-sm">
                {/* Step 1 */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-400 text-xs font-bold">#1</span>
                    <span className="text-muted-foreground text-xs">Clone the repository</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-4 py-3 group-hover:bg-secondary/50 transition-colors">
                    <ChevronRight className="size-4 text-emerald-400 shrink-0" />
                    <code className="text-foreground">
                      git clone https://github.com/Bigmints-com/ubot.git
                    </code>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-400 text-xs font-bold">#2</span>
                    <span className="text-muted-foreground text-xs">Install dependencies</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-4 py-3 group-hover:bg-secondary/50 transition-colors">
                    <ChevronRight className="size-4 text-emerald-400 shrink-0" />
                    <code className="text-foreground">
                      cd ubot && make deps
                    </code>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-400 text-xs font-bold">#3</span>
                    <span className="text-muted-foreground text-xs">Build and install</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-4 py-3 group-hover:bg-secondary/50 transition-colors">
                    <ChevronRight className="size-4 text-emerald-400 shrink-0" />
                    <code className="text-foreground">
                      make install
                    </code>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-400 text-xs font-bold">#4</span>
                    <span className="text-muted-foreground text-xs">Launch Ubot</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-4 py-3 group-hover:bg-secondary/50 transition-colors">
                    <ChevronRight className="size-4 text-emerald-400 shrink-0" />
                    <code className="text-foreground">
                      ubot start
                    </code>
                  </div>
                </div>

                {/* Success output */}
                <div className="border-t border-border/30 pt-5">
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <CheckCircle className="size-4" />
                    <span className="text-xs font-semibold tracking-wide uppercase">Output</span>
                  </div>
                  <div className="text-muted-foreground space-y-1">
                    <p>🤖 Starting Ubot on port 11490 ...</p>
                    <p>🤖 Ubot is running! (PID 73156)</p>
                    <p>🤖 Dashboard: <span className="text-emerald-400">http://localhost:11490</span></p>
                    <p>🤖 Logs: ubot logs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info cards below terminal */}
            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border/30">
                <Terminal className="size-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-medium">CLI Control</p>
                  <p className="text-xs text-muted-foreground">start · stop · status · logs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border/30">
                <Shield className="size-4 text-blue-400 shrink-0" />
                <div>
                  <p className="text-xs font-medium">Config</p>
                  <p className="text-xs text-muted-foreground">~/.ubot/config.json</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border/30">
                <Zap className="size-4 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs font-medium">59 Tools</p>
                  <p className="text-xs text-muted-foreground">7 modules · ready to go</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Integrations Section */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs tracking-wider uppercase"
            >
              Ecosystem
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built for Your Stack
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground text-lg">
              Integrates with the tools and platforms you already use.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {integrations.map((name) => (
              <Badge
                key={name}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors cursor-default"
              >
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Architecture Highlight */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Privacy-First
                  <br />
                  <span className="gradient-text">Self-Hosted Agent</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ubot runs entirely on your own machine. Your messages,
                  emails, and files never leave your network. The only external
                  calls are to the LLM API of your choice — OpenAI, Anthropic,
                  or even a local Ollama instance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1.5">
                    <Shield className="size-3" />
                    Local-First
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <Terminal className="size-3" />
                    Node.js Runtime
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <Brain className="size-3" />
                    Multi-LLM Support
                  </Badge>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    label: "Data Storage",
                    value: "Local SQLite — no cloud dependency",
                  },
                  {
                    label: "LLM Provider",
                    value: "Swap between OpenAI, Claude, or Ollama",
                  },
                  {
                    label: "Skills Engine",
                    value: "Modular TypeScript framework",
                  },
                  {
                    label: "Safety",
                    value: "Owner approval for sensitive actions",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center p-3 rounded-lg bg-secondary/30"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm text-muted-foreground text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-t from-violet-500/8 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Automate?
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-lg mb-8">
            Get Ubot running in minutes. Clone the repo, configure your LLM
            provider, scan a QR code, and start commanding your digital life.
          </p>
          <Button size="lg" className="px-8 text-base" asChild>
            <a
              href="https://github.com/Bigmints-com/ubot"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
              <ArrowRight className="size-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Bot className="size-3.5" />
            </div>
            <span className="text-sm font-semibold">Ubot</span>
            <span className="text-sm text-muted-foreground">
              by{" "}
              <a
                href="https://bigmints.com"
                className="hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bigmints
              </a>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bigmints. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
