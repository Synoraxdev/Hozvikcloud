import type { IconName } from "../components/Icon";
import type { ServiceId } from "../config/site";

/** Editable homepage copy. Only publish details that HozvikCloud has confirmed. */

export const hero = {
  eyebrow: "India-based hosting for developers and gaming communities",
  title: "Affordable hosting built for performance.",
  description:
    "Game servers, VPS, bots, databases and more on fast NVMe hardware with Ryzen-class CPUs. Start with a plan that fits your budget and scale up as your project grows.",
  primaryCta: { label: "Explore Hosting", href: "#services" },
  secondaryCta: { label: "Why HozvikCloud", href: "#why" },
  trust: [
    { icon: "storage", label: "NVMe Storage" },
    { icon: "cpu", label: "Up to 4.9 GHz CPUs" },
    { icon: "shieldCheck", label: "Multi-layer DDoS Filtering" },
  ] satisfies { icon: IconName; label: string }[],
};

export const servicesSection = {
  kicker: "Hosting services",
  title: "Find the right hosting for your project.",
  description:
    "Everything you need to launch and grow, from game servers to domains, under one roof.",
};

export const services: { id: ServiceId; name: string; description: string; icon: IconName }[] = [
  {
    id: "gameServers",
    name: "Game Server Hosting",
    description: "Launch multiplayer servers and run them from the HozvikCloud game panel.",
    icon: "gamepad",
  },
  {
    id: "vps",
    name: "VPS Hosting",
    description: "Flexible virtual servers for apps, websites, and developer workloads.",
    icon: "server",
  },
  {
    id: "lavalink",
    name: "Lavalink Hosting",
    description: "Lavalink hosting for compatible music bots.",
    icon: "music",
  },
  {
    id: "bots",
    name: "Bot Hosting",
    description: "Keep your Discord and Telegram bots online on hosting built for always-on workloads.",
    icon: "bot",
  },
  {
    id: "databases",
    name: "Database Hosting",
    description: "Databases for your applications, bots, and projects.",
    icon: "database",
  },
  {
    id: "cloud",
    name: "Cloud Hosting",
    description: "Cloud hosting that gives your workloads room to grow as usage changes.",
    icon: "cloud",
  },
  {
    id: "domains",
    name: "Domains",
    description: "Domain services that sit right next to your hosting.",
    icon: "globe",
  },
];

export const highlights = [
  {
    id: "compute",
    title: "Fast compute and storage",
    description:
      "Ryzen-class CPUs with configurations up to 4.9 GHz, NVMe storage for quick reads and writes, and DDR4 RAM where applicable. Exact hardware depends on your plan.",
    bullets: ["Ryzen-class CPUs", "Speeds up to 4.9 GHz", "NVMe storage", "DDR4 RAM where applicable"],
  },
  {
    id: "ddos",
    title: "Multi-layer DDoS protection",
    description:
      "HozvikCloud applies multi-layer filtering to its official client, game, and billing panels, so the places where you manage your services stay reachable.",
    bullets: ["Client panel", "Game panel", "Billing panel"],
  },
  {
    id: "panel",
    title: "A game panel built for server owners",
    description:
      "Manage your game servers from one clean panel made for server owners. Everyday tasks stay simple, so you can focus on your community instead of your setup.",
    bullets: ["One place for your game servers", "Built for server owners and communities"],
  },
] as const;

export const featuresSection = {
  kicker: "Features",
  title: "Powerful hosting features built for performance and reliability",
};

export const features: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Instant Setup",
    description: "Eligible services are provisioned fast, so your server, bot, or app is ready when you are.",
    icon: "zap",
  },
  {
    title: "Unmatched Performance",
    description: "Fast compute and NVMe storage keep supported workloads loading quickly and responding smoothly.",
    icon: "gauge",
  },
  {
    title: "Responsive Support",
    description: "Get help during setup and after purchase, whenever questions come up.",
    icon: "headset",
  },
  {
    title: "Fast Processors",
    description: "CPUs with speeds up to 4.9 GHz give supported games and apps the processing speed they rely on.",
    icon: "cpu",
  },
  {
    title: "Advanced DDoS Protection",
    description: "Multi-layer filtering protects HozvikCloud's official client, game, and billing panels from malicious traffic.",
    icon: "shieldCheck",
  },
  {
    title: "Affordable and Scalable",
    description: "Start with a budget-friendly plan, then move up to larger options for bigger projects, teams, and providers.",
    icon: "trending",
  },
];

export const why = {
  kicker: "About HozvikCloud",
  title: "Why choose HozvikCloud?",
  intro:
    "HozvikCloud is an India-based hosting brand built on a simple idea: good hosting should not cost a fortune. We serve developers, gaming communities, growing teams, and providers who want dependable infrastructure at a fair price.",
  brand:
    "HozvikCloud is owned by Jenil Moradiya and keeps improving its platform as customer needs change.",
  points: [
    {
      icon: "coins",
      title: "Costs that stay manageable",
      description: "Start small with a budget-friendly plan and upgrade only when your project needs it.",
    },
    {
      icon: "headset",
      title: "Support after purchase",
      description: "Help does not end at checkout. Reach the team during setup and once your service is live.",
    },
    {
      icon: "server",
      title: "Built for always-on workloads",
      description: "Hardware built for continuous operation keeps your servers, bots, and apps ready to run.",
    },
    {
      icon: "layers",
      title: "Small projects to larger deployments",
      description: "Room for a first project today and for teams and providers as you grow.",
    },
    {
      icon: "refresh",
      title: "Ongoing improvements",
      description: "We keep refining the platform, panels, and services as the community grows.",
    },
  ] satisfies { icon: IconName; title: string; description: string }[],
};

export const faq = {
  kicker: "FAQ",
  title: "Frequently asked questions",
  items: [
    {
      question: "What hosting services does HozvikCloud offer?",
      answer:
        "HozvikCloud offers game server, VPS, Lavalink, bot, database, and cloud hosting, along with domain services.",
    },
    {
      question: "Is HozvikCloud based in India?",
      answer: "Yes. HozvikCloud is an India-based hosting brand owned by Jenil Moradiya.",
    },
    {
      question: "Can I start with a small project and upgrade later?",
      answer:
        "Yes. You can start with a plan that fits your budget and move to larger options as your project, team, or business grows.",
    },
    {
      question: "Which panels use multi-layer DDoS filtering?",
      answer:
        "HozvikCloud applies multi-layer DDoS filtering to its official client panel, game panel, and billing panel.",
    },
    {
      question: "Can I host Discord bots, Telegram bots, or Lavalink?",
      answer:
        "Yes. Bot Hosting runs Discord and Telegram bots on hosting designed for always-on workloads, and Lavalink Hosting supports compatible music bots.",
    },
    {
      question: "Can I get help after purchasing a hosting service?",
      answer: "Yes. HozvikCloud provides support during setup and after you purchase a hosting service.",
    },
  ],
};

export const community = {
  title: "Become part of the HozvikCloud community",
  description:
    "Meet fellow HozvikCloud customers, get help from our team, and stay up to date with platform news and new features.",
  buttonLabel: "Join our Discord ↗",
};

export const footer = {
  description:
    "India-based hosting for game servers, VPS, cloud, bots, Lavalink, databases, and domains.",
};
