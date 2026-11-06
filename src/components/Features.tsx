import { features, featuresSection } from "../content/home";
import { Icon } from "./Icon";

export function Features() {
  return (
    <section id="features" className="section" aria-labelledby="features-title">
      <div className="container">
        <header className="section-head">
          <p className="kicker">{featuresSection.kicker}</p>
          <h2 id="features-title">{featuresSection.title}</h2>
        </header>
        <ul className="features-grid" role="list">
          {features.map((feature) => (
            <li key={feature.title} className="card feature-card reveal">
              <span className="icon-box">
                <Icon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
