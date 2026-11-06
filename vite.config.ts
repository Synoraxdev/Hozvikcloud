import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * In development the page is also server-rendered, so the dev server shows
 * the same head tags and markup that the production pre-render produces.
 */
function devPrerender() {
  return {
    name: "hozvikcloud-dev-prerender",
    apply: "serve" as const,
    transformIndexHtml: {
      order: "pre" as const,
      async handler(html: string, ctx: { server?: { ssrLoadModule: (id: string) => Promise<any> } }) {
        if (!ctx.server) return html;
        const mod = await ctx.server.ssrLoadModule("/src/entry-server.tsx");
        return html
          .replace("<!--head-tags-->", mod.renderHead())
          .replace("<!--app-html-->", mod.render());
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), devPrerender()],
  build: { target: "es2022" },
});
