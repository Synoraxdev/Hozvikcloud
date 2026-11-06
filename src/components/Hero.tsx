import { siteConfig } from "../config/site";
import { hero } from "../content/home";
import { HeroVisual } from "./HeroVisual";
import { Icon } from "./Icon";

export function Hero() {
  const guarantee = siteConfig.confirmed.moneyBackGuarantee;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow rise" style={{ animationDelay: "0ms" }}>
          <span className="eyebrow-dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 id="hero-title" className="rise" style={{ animationDelay: "80ms" }}>
          {hero.title}
        </h1>
        <p className="hero-lead rise" style={{ animationDelay: "160ms" }}>
          {hero.description}
        </p>
        <div className="hero-actions rise" style={{ animationDelay: "240ms" }}>
          <a className="btn btn-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className="btn btn-secondary" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
        <ul className="trust-row rise" role="list" style={{ animationDelay: "320ms" }}>
          {hero.trust.map((item) => (
            <li key={item.label}>
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </li>
          ))}
          {guarantee && (
            <li>
              <Icon name="shield" size={18} />
              <span>{guarantee}</span>
            </li>
          )}
        </ul>
        <HeroVisual />
      </div>
    </section>
  );
}
