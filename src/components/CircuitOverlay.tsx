"use client";

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
        filter: "drop-shadow(0 0 4px rgba(0,220,255,0.8))",
      }}
    >
      <style>{`
        @keyframes circuitDraw {
          from { stroke-dashoffset: 2000; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes circuitPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes nodePing {
          0%        { r: 3; opacity: 0.5; }
          50%       { r: 6; opacity: 1; }
          100%      { r: 3; opacity: 0.5; }
        }
        @keyframes nodeRipple {
          0%   { r: 3;  opacity: 0.7; }
          60%  { r: 11; opacity: 0; }
          100% { r: 11; opacity: 0; }
        }
        .circuit-line {
          stroke: rgba(0,220,255,0.35);
          stroke-width: 1;
          fill: none;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: circuitDraw 3.5s ease forwards, circuitPulse 4s ease-in-out 3.5s infinite;
        }
        .circuit-node {
          fill: rgba(0,220,255,0.5);
          animation: nodePing 3s ease-in-out infinite;
        }
        .circuit-node-ripple {
          fill: rgba(0,220,255,0.25);
          animation: nodeRipple 3s ease-out infinite;
        }
        /* Signal dots travelling along paths */
        .signal {
          fill: rgba(0,255,220,0.9);
          filter: drop-shadow(0 0 4px rgba(0,255,220,1));
        }
      `}</style>

      {/* ── Circuit traces ── */}
      <path id="cp1" className="circuit-line" d="M 0 80 H 240 V 180 H 420 V 80 H 620" />
      <path id="cp2" className="circuit-line" d="M 80 0 V 180 H 340 V 300 H 560 V 220 H 780" />
      <path id="cp3" className="circuit-line" d="M 0 420 H 200 V 320 H 460 V 420 H 700 V 300 H 900" />
      <path id="cp4" className="circuit-line" d="M 900 0 V 140 H 1050 V 260 H 900 V 380 H 1200" />
      <path id="cp5" className="circuit-line" d="M 600 600 V 500 H 760 V 400 H 960 V 500 H 1200" />
      <path id="cp6" className="circuit-line" d="M 700 0 V 60 H 860 V 160 H 1100 V 80 H 1200" />

      {/* ── Travelling signal dots — one per path ── */}
      <circle className="signal" r="3.5">
        <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
          <mpath href="#cp1" />
        </animateMotion>
      </circle>
      <circle className="signal" r="3.5">
        <animateMotion dur="6s" repeatCount="indefinite" begin="2.2s">
          <mpath href="#cp2" />
        </animateMotion>
      </circle>
      <circle className="signal" r="3.5">
        <animateMotion dur="7s" repeatCount="indefinite" begin="0.5s">
          <mpath href="#cp3" />
        </animateMotion>
      </circle>
      <circle className="signal" r="3.5">
        <animateMotion dur="5.5s" repeatCount="indefinite" begin="3s">
          <mpath href="#cp4" />
        </animateMotion>
      </circle>
      <circle className="signal" r="3.5">
        <animateMotion dur="6.5s" repeatCount="indefinite" begin="1.5s">
          <mpath href="#cp5" />
        </animateMotion>
      </circle>
      <circle className="signal" r="3.5">
        <animateMotion dur="4.8s" repeatCount="indefinite" begin="0s">
          <mpath href="#cp6" />
        </animateMotion>
      </circle>

      {/* ── Nodes with ripple rings ── */}
      {[
        [240,80],[240,180],[420,180],[420,80],[80,180],[340,180],
        [340,300],[560,300],[560,220],[200,420],[200,320],[460,320],
        [460,420],[700,420],[700,300],[900,140],[1050,140],[1050,260],
        [900,260],[900,380],[760,500],[760,400],[960,400],[960,500],
        [700,60],[860,60],[860,160],[1100,160],[1100,80],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle
            className="circuit-node-ripple"
            cx={cx} cy={cy} r="3"
            style={{ animationDelay: `${(i * 0.18) % 3}s` }}
          />
          <circle
            className="circuit-node"
            cx={cx} cy={cy} r="3"
            style={{ animationDelay: `${(i * 0.18) % 3}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
