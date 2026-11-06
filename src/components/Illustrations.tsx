/**
 * Original SVG illustrations for the three highlight cards.
 * They are intentionally generic: no invented metrics, numbers or product controls.
 */

const SHIELD = "M0 -50 L40 -34 V4 C40 30 20 46 0 56 C-20 46 -40 30 -40 4 V-34 Z";

function Backdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#202020" />
          <stop offset="1" stopColor="#0d0d0d" />
        </linearGradient>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity=".05" />
        </pattern>
      </defs>
      <rect width="420" height="280" fill={`url(#${id}-bg)`} />
      <rect width="420" height="280" fill={`url(#${id}-grid)`} />
    </>
  );
}

export function CpuIllustration() {
  const pins = [82, 99, 116, 133, 150, 167];
  const graph = "250,165 275,150 298,155 322,120 346,125 372,85";
  return (
    <svg
      className="illustration"
      viewBox="0 0 420 280"
      role="img"
      aria-label="A CPU chip connected to a rising performance graph, with NVMe and DDR4 labels"
    >
      <Backdrop id="cpu" />
      <defs>
        <linearGradient id="cpu-chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
        <linearGradient id="cpu-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".32" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* layered stack under the chip */}
      <rect x="46" y="109" width="110" height="110" rx="16" fill="#101010" stroke="#2b2b2b" />
      <rect x="58" y="97" width="110" height="110" rx="16" fill="#151515" stroke="#333" />

      {/* pins */}
      <g fill="#6b6b6b">
        {pins.map((p) => (
          <g key={p}>
            <rect x={p} y="75" width="6" height="10" rx="2" />
            <rect x={p} y="195" width="6" height="10" rx="2" />
            <rect x="60" y={p - 2 + 5} width="10" height="6" rx="2" />
            <rect x="180" y={p - 2 + 5} width="10" height="6" rx="2" />
          </g>
        ))}
      </g>

      {/* chip */}
      <rect x="70" y="85" width="110" height="110" rx="16" fill="url(#cpu-chip)" stroke="#8a8a8a" />
      <rect x="95" y="110" width="60" height="60" rx="8" fill="#0d0d0d" stroke="#b8b8b8" />
      <text x="125" y="146" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" letterSpacing="1.5">
        CPU
      </text>

      {/* connector */}
      <path d="M190 140 H210 Q220 140 220 130 V120 H235" fill="none" stroke="#666" strokeDasharray="3 5" strokeLinecap="round" />
      <circle cx="235" cy="120" r="3" fill="#fff" />

      {/* graph card */}
      <rect x="235" y="60" width="150" height="120" rx="14" fill="#0d0d0d" stroke="#2b2b2b" />
      <g stroke="#2b2b2b">
        <path d="M250 90H370M250 115H370M250 140H370" />
      </g>
      <path d="M250 170 L250 165 L275 150 L298 155 L322 120 L346 125 L372 85 L372 170 Z" fill="url(#cpu-area)" />
      <polyline points={graph} fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M250 170H372" stroke="#454545" />
      <circle cx="372" cy="85" r="9" fill="#fff" fillOpacity=".15" />
      <circle cx="372" cy="85" r="4" fill="#fff" />

      {/* hardware labels */}
      <g fontSize="12" fill="#b8b8b8" textAnchor="middle" fontWeight="600">
        <rect x="235" y="200" width="70" height="26" rx="13" fill="#171717" stroke="#454545" />
        <text x="270" y="217">NVMe</text>
        <rect x="315" y="200" width="70" height="26" rx="13" fill="#171717" stroke="#454545" />
        <text x="350" y="217">DDR4</text>
      </g>
    </svg>
  );
}

export function ShieldIllustration() {
  const blocked = [70, 130, 190];
  const passed = [100, 160, 220];
  const targets = [
    { y: 88, label: "Client" },
    { y: 128, label: "Game" },
    { y: 168, label: "Billing" },
  ];
  return (
    <svg
      className="illustration"
      viewBox="0 0 420 280"
      role="img"
      aria-label="Incoming traffic filtered by layered shields before reaching the client, game and billing panels"
    >
      <Backdrop id="shd" />
      <defs>
        <linearGradient id="shd-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4a4a" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
      </defs>

      {/* incoming traffic */}
      <g strokeLinecap="round" fill="none">
        {blocked.map((y) => (
          <g key={y}>
            <path className="flow" d={`M16 ${y} H118`} stroke="#8a8a8a" strokeWidth="2" strokeDasharray="2 8" />
            <path d={`M122 ${y - 5} l10 10 M132 ${y - 5} l-10 10`} stroke="#fff" strokeWidth="1.8" />
          </g>
        ))}
        {passed.map((y) => (
          <path key={y} className="flow" d={`M16 ${y} H132`} stroke="#8a8a8a" strokeWidth="2" strokeDasharray="2 8" />
        ))}
      </g>

      {/* layered shields */}
      <g transform="translate(210 140)">
        <path d={SHIELD} transform="scale(1.8)" fill="none" stroke="#2b2b2b" strokeWidth="1" />
        <path d={SHIELD} transform="scale(1.5)" fill="none" stroke="#454545" strokeWidth="1" />
        <path d={SHIELD} transform="scale(1.2)" fill="url(#shd-fill)" stroke="#fff" strokeWidth="1.2" />
        <path d="M-16 4 L-4 16 L18 -10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* filtered traffic to panels */}
      {targets.map((t) => (
        <g key={t.label}>
          <path className="flow" d={`M290 ${t.y + 12} H332`} stroke="#fff" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" fill="none" />
          <rect x="336" y={t.y} width="70" height="24" rx="8" fill="#171717" stroke="#454545" />
          <text x="371" y={t.y + 16} textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function PanelIllustration() {
  return (
    <svg
      className="illustration"
      viewBox="0 0 420 280"
      role="img"
      aria-label="A layered game server panel showing server status and resource bars"
    >
      <Backdrop id="pnl" />
      <defs>
        <linearGradient id="pnl-win" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#262626" />
          <stop offset="1" stopColor="#0f0f0f" />
        </linearGradient>
        <linearGradient id="pnl-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#777" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>

      {/* back layers */}
      <rect x="78" y="40" width="322" height="180" rx="14" fill="#0d0d0d" stroke="#2b2b2b" />
      <rect x="62" y="54" width="322" height="184" rx="14" fill="#121212" stroke="#333" />

      {/* front window */}
      <rect x="36" y="72" width="330" height="182" rx="14" fill="url(#pnl-win)" stroke="#454545" />
      <path d="M36 102H366" stroke="#2b2b2b" />
      <g fill="#555">
        <circle cx="54" cy="87" r="4" />
        <circle cx="68" cy="87" r="4" />
        <circle cx="82" cy="87" r="4" />
      </g>
      <rect x="150" y="83" width="100" height="8" rx="4" fill="#2b2b2b" />

      {/* sidebar */}
      <path d="M110 102V254" stroke="#2b2b2b" />
      <rect x="48" y="114" width="52" height="20" rx="6" fill="#fff" fillOpacity=".12" />
      <rect x="56" y="120" width="36" height="8" rx="4" fill="#fff" />
      <rect x="56" y="148" width="36" height="8" rx="4" fill="#454545" />
      <rect x="56" y="170" width="30" height="8" rx="4" fill="#454545" />
      <rect x="56" y="192" width="34" height="8" rx="4" fill="#454545" />

      {/* status */}
      <circle cx="132" cy="124" r="5" fill="#fff" />
      <circle cx="132" cy="124" r="9" fill="#fff" fillOpacity=".15" />
      <text x="148" y="128" fontSize="12" fontWeight="600" fill="#fff">Server status</text>
      <rect x="290" y="112" width="60" height="22" rx="11" fill="#0d0d0d" stroke="#666" />
      <text x="320" y="127" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Online</text>

      {/* resources */}
      <text x="124" y="157" fontSize="11" fill="#b8b8b8">CPU</text>
      <rect x="186" y="150" width="164" height="8" rx="4" fill="#2b2b2b" />
      <rect x="186" y="150" width="104" height="8" rx="4" fill="url(#pnl-bar)" />
      <text x="124" y="181" fontSize="11" fill="#b8b8b8">Memory</text>
      <rect x="186" y="174" width="164" height="8" rx="4" fill="#2b2b2b" />
      <rect x="186" y="174" width="74" height="8" rx="4" fill="url(#pnl-bar)" />

      {/* console */}
      <rect x="124" y="198" width="226" height="44" rx="8" fill="#000" stroke="#2b2b2b" />
      <rect x="134" y="208" width="96" height="4" rx="2" fill="#454545" />
      <rect x="134" y="218" width="150" height="4" rx="2" fill="#454545" />
      <rect x="134" y="228" width="64" height="4" rx="2" fill="#b8b8b8" fillOpacity=".6" />
    </svg>
  );
}
