import type { ReactNode } from "react";
import { siteConfig } from "../config/site";
import { highlights } from "../content/home";
import { Icon, type IconName } from "./Icon";
import { CpuIllustration, PanelIllustration, ShieldIllustration } from "./Illustrations";

const art: Record<(typeof highlights)[number]["id"], ReactNode> = {
  compute: <CpuIllustration />,
  ddos: <ShieldIllustration />,
  panel: <PanelIllustration />,
};

const bulletIcon: Record<(typeof highlights)[number]["id"], IconName> = {
  compute: "check",
  ddos: "shieldCheck",
  panel: "check",
};

export function Highlights() {
  const figure = siteConfig.confirmed.ddosShieldFigure;
  return (
    <section id="highlights" className="section section-tight" aria-label="Platform highlights">
      <div className="container highlight-grid">
        {highlights.map((item) => (
          <article key={item.id} className="card highlight-card reveal">
            <div className="highlight-art">{art[item.id]}</div>
            <div className="highlight-body">
              {item.id === "ddos" && figure && (
                <p className="badge">
                  <Icon name="shield" size={16} /> {figure} DDoS Shield
                </p>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="check-list" role="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Icon name={bulletIcon[item.id]} size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
