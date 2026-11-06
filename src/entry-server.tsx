import { renderToStaticMarkup, renderToString } from "react-dom/server";
import App from "./App";
import { SEOHead } from "./components/SEO";

export { siteConfig } from "./config/site";

/** Pre-rendered markup for the page body. */
export function render(): string {
  return renderToString(<App />);
}

/** Pre-rendered <head> tags (title, meta, canonical, Open Graph, JSON-LD). */
export function renderHead(): string {
  return renderToStaticMarkup(<SEOHead />);
}
