export default function CircuitOverlay() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.55,
        filter: "drop-shadow(0 0 4px rgba(216,115,7,0.8))",
      }}
    >
      <style>{`
        .circuit-line {
          stroke: rgba(216,115,7,0.35);
          stroke-width: 1;
          fill: none;
        }
        .circuit-node {
          fill: rgba(216,115,7,0.5);
        }
      `}</style>

      {/* ── Circuit traces ── */}
      <path className="circuit-line" d="M 0 80 H 240 V 180 H 420 V 80 H 620" />
      <path className="circuit-line" d="M 80 0 V 180 H 340 V 300 H 560 V 220 H 780" />
      <path className="circuit-line" d="M 0 420 H 200 V 320 H 460 V 420 H 700 V 300 H 900" />
      <path className="circuit-line" d="M 900 0 V 140 H 1050 V 260 H 900 V 380 H 1200" />
      <path className="circuit-line" d="M 600 600 V 500 H 760 V 400 H 960 V 500 H 1200" />
      <path className="circuit-line" d="M 700 0 V 60 H 860 V 160 H 1100 V 80 H 1200" />

      {/* ── Nodes ── */}
      {[
        [240,80],[240,180],[420,180],[420,80],[80,180],[340,180],
        [340,300],[560,300],[560,220],[200,420],[200,320],[460,320],
        [460,420],[700,420],[700,300],[900,140],[1050,140],[1050,260],
        [900,260],[900,380],[760,500],[760,400],[960,400],[960,500],
        [700,60],[860,60],[860,160],[1100,160],[1100,80],
      ].map(([cx, cy], i) => (
        <circle key={i} className="circuit-node" cx={cx} cy={cy} r="3" />
      ))}
    </svg>
  );
}
