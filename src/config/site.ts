/**
 * Site configuration — the one place to edit external destinations and SEO values.
 *
 * External links render only when a real http(s) URL is set. Leave a value as ""
 * and the link, button or footer entry is simply not shown.
 */

export type ServiceId =
  | "gameServers"
  | "vps"
  | "lavalink"
  | "bots"
  | "databases"
  | "cloud"
  | "domains";

export const siteConfig = {
  name: "HozvikCloud",
  owner: "Jenil Moradiya",
  /** Canonical homepage URL (keep the trailing slash). */
  url: "https://hozvikcloud.de/",
  title: "HozvikCloud | Game Server, VPS & Cloud Hosting",
  description:
    "HozvikCloud is an India-based hosting provider offering game server, VPS, cloud, bot, Lavalink, database, and domain services.",
  locale: "en_IN",
  themeColor: "#000000",
  robots: "index, follow, max-image-preview:large",

  /** Routes included in sitemap.xml (homepage only for this phase). */
  routes: ["/"],

  /** Optional path to a logo image in /public (e.g. "/logo.svg"). Empty = text wordmark. */
  logo: "",

  /** Social card image in /public. Original branded image, 1200x630. */
  socialImage: "/og-image.png",
  socialImageAlt: "HozvikCloud — affordable hosting built for performance",

  links: {
    /** Discord invite URL, e.g. "https://discord.gg/xxxx". Empty hides the community button. */
    discord: "",
    clientPanel: "",
    gamePanel: "",
    billingPanel: "",
    /** Optional destination for each service card. Empty = card is not a link. */
    services: {
      gameServers: "",
      vps: "",
      lavalink: "",
      bots: "",
      databases: "",
      cloud: "",
      domains: "",
    } satisfies Record<ServiceId, string>,
  },

  /**
   * Business details that are published only once confirmed.
   * Fill a value to show it; leave "" to keep it off the page.
   */
  confirmed: {
    /** e.g. "30-day money-back guarantee" — add only with agreed refund terms. */
    moneyBackGuarantee: "",
    /** e.g. "17+ Tbps" — add only once confirmed for the official panels. */
    ddosShieldFigure: "",
  },
};

/** Returns a safe absolute http(s) URL, or null when the value is empty or invalid. */
export function externalUrl(value: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).href;
}
