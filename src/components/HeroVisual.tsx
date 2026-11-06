import { Icon, type IconName } from "./Icon";

/** Decorative product preview. Generic labels only, no metrics or product controls. */
const side: { icon: IconName; name: string }[] = [
  { icon: "gamepad", name: "Game Servers" },
  { icon: "server", name: "VPS" },
  { icon: "bot", name: "Bots" },
  { icon: "database", name: "Databases" },
];

const rows: { icon: IconName; name: string; width: string }[] = [
  { icon: "gamepad", name: "Game Server", width: "72%" },
  { icon: "server", name: "VPS", width: "46%" },
  { icon: "bot", name: "Discord Bot", width: "34%" },
  { icon: "database", name: "Database", width: "58%" },
];

const LINE = "M0 74 C40 70 64 52 104 56 S176 32 218 36 S296 14 346 18 S418 10 460 4";

export function HeroVisual() {
  return (
    <div className="hero-visual rise" aria-hidden="true" style={{ animationDelay: "440ms" }}>
      <div className="hero-glow" />
      <div className="dash">
        <div className="dash-bar">
          <span />
          <span />
          <span />
          <div className="dash-title">HozvikCloud Panel</div>
        </div>
        <div className="dash-body">
          <div className="dash-side">
            {side.map((item, i) => (
              <div key={item.name} className={`dash-nav${i === 0 ? " is-active" : ""}`}>
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="dash-main">
            <div className="dash-head">
              <div>
                <p className="dash-eyebrow">Overview</p>
                <p className="dash-heading">Your services</p>
              </div>
              <span className="dash-pill">
                <i /> Online
              </span>
            </div>
            <div className="dash-grid">
              <div className="dash-rows">
                {rows.map((row) => (
                  <div key={row.name} className="dash-row">
                    <span className="dash-row-icon">
                      <Icon name={row.icon} size={16} />
                    </span>
                    <span className="dash-row-name">{row.name}</span>
                    <span className="dash-meter">
                      <b style={{ width: row.width }} />
                    </span>
                    <span className="dash-dot" />
                  </div>
                ))}
              </div>
              <div className="dash-chart">
                <p className="dash-eyebrow">Performance</p>
                <svg viewBox="0 0 460 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fff" stopOpacity=".28" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="dash-area" d={`${LINE} L460 90 L0 90 Z`} fill="url(#hv-area)" />
                  <path className="dash-line" d={LINE} pathLength={1} fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
