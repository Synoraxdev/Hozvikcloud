import { externalUrl, siteConfig } from "../config/site";
import { community } from "../content/home";

export function Community() {
  const invite = externalUrl(siteConfig.links.discord);
  return (
    <section id="community" className="section section-tight" aria-labelledby="community-title">
      <div className="container">
        <div className="community-card reveal">
          <div className="community-copy">
            <h2 id="community-title">{community.title}</h2>
            <p>{community.description}</p>
          </div>
          {invite && (
            <a className="btn btn-primary" href={invite} target="_blank" rel="noopener noreferrer">
              {community.buttonLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
