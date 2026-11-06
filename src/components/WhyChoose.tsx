import { why } from "../content/home";
import { Icon } from "./Icon";

export function WhyChoose() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container why-grid">
        <div className="why-copy">
          <p className="kicker">{why.kicker}</p>
          <h2 id="why-title">{why.title}</h2>
          <p className="why-intro">{why.intro}</p>
          <p className="why-brand">{why.brand}</p>
        </div>
        <ul className="why-points" role="list">
          {why.points.map((point) => (
            <li key={point.title} className="why-point reveal">
              <span className="icon-box">
                <Icon name={point.icon} />
              </span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
