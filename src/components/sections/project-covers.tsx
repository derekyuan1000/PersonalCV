import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

// Code-drawn cover art for the project cards. Sizes use container query units
// (cqw) so the whole cover scales with the card across breakpoints.

interface CoverProps {
  index: string;
  category: string;
  title: string;
  blurb: string;
  tags: string[];
  accent: string;
  children: ReactNode;
}

function Cover({ index, category, title, blurb, tags, accent, children }: CoverProps) {
  // Deltha is very wide, so shrink long single words to fit the card width.
  const longestWord = Math.max(...title.split(" ").map((word) => word.length));
  const titleSize = Math.min(10.5, 100 / longestWord);
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden border border-white/10 bg-[#121212] text-white"
      style={{
        containerType: "inline-size",
        borderRadius: "inherit",
        backgroundImage: `radial-gradient(120% 70% at 50% 0%, ${accent}33 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)`,
        backgroundSize: "100% 100%, 10cqw 10cqw, 10cqw 10cqw",
      }}
    >
      <div
        className="flex items-center justify-between font-mono uppercase"
        style={{ padding: "6cqw 7cqw 0", fontSize: "4.6cqw", letterSpacing: "0.12em" }}
      >
        <span style={{ color: accent }}>
          {index} · {category}
        </span>
        <ArrowUpRight className="text-white/50" style={{ width: "7cqw", height: "7cqw" }} />
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center"
        style={{ padding: "4cqw 7cqw" }}
      >
        {children}
      </div>

      <div style={{ padding: "0 7cqw 7cqw" }}>
        <h3
          className="font-deltha leading-none tracking-tight"
          style={{ fontSize: `${titleSize}cqw` }}
        >
          {title}
        </h3>
        <p
          className="text-white/60"
          style={{ fontSize: "5.2cqw", lineHeight: 1.35, marginTop: "2.5cqw" }}
        >
          {blurb}
        </p>
        <div className="flex flex-wrap" style={{ gap: "2cqw", marginTop: "3.5cqw" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 font-mono text-white/70"
              style={{ fontSize: "4.2cqw", padding: "0.8cqw 2.6cqw" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- DragonBot: chess board with the engine's chosen move ---------- */

const PIECES: [number, number, string, boolean][] = [
  // [file, rank (0 = top), glyph, isWhite]
  [6, 0, "♚", false],
  [5, 1, "♟", false],
  [6, 1, "♟", false],
  [7, 2, "♟", false],
  [3, 2, "♞", false],
  [2, 0, "♜", false],
  [4, 4, "♘", true],
  [3, 6, "♕", true],
  [5, 6, "♙", true],
  [6, 6, "♙", true],
  [6, 7, "♔", true],
  [0, 7, "♖", true],
];

function ChessMotif({ accent }: { accent: string }) {
  const sq = 10;
  const center = (f: number, r: number) => [f * sq + sq / 2, r * sq + sq / 2];
  const [x1, y1] = center(4, 4);
  const [x2, y2] = center(5, 2);
  return (
    <svg viewBox="-2 -2 84 84" className="h-full max-h-full w-full" aria-hidden>
      <defs>
        <marker
          id="db-arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="3.2"
          markerHeight="3.2"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={accent} />
        </marker>
      </defs>
      <rect
        x="-1.5"
        y="-1.5"
        width="83"
        height="83"
        rx="2"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
      />
      {Array.from({ length: 64 }, (_, i) => {
        const f = i % 8;
        const r = Math.floor(i / 8);
        const light = (f + r) % 2 === 0;
        const highlighted = (f === 4 && r === 4) || (f === 5 && r === 2);
        return (
          <rect
            key={i}
            x={f * sq}
            y={r * sq}
            width={sq}
            height={sq}
            fill={highlighted ? `${accent}99` : light ? "#d9c7a6" : "#8a6a48"}
          />
        );
      })}
      {PIECES.map(([f, r, glyph, white]) => {
        const [cx, cy] = center(f, r);
        return (
          <text
            key={`${f}-${r}`}
            x={cx}
            y={cy + 3.2}
            textAnchor="middle"
            fontSize="9"
            fill={white ? "#fafafa" : "#111"}
            stroke={white ? "#111" : "none"}
            strokeWidth="0.3"
          >
            {glyph}
          </text>
        );
      })}
      <line
        x1={x1}
        y1={y1}
        x2={x2 - 0.6}
        y2={y2 + 3}
        stroke={accent}
        strokeWidth="2.2"
        strokeLinecap="round"
        markerEnd="url(#db-arrow)"
        opacity="0.9"
      />
    </svg>
  );
}

/* ---------- ElectionTracker: projected House of Commons hemicycle ---------- */

const PARTIES: [string, number][] = [
  ["#e4003b", 0.2], // Labour
  ["#6ab023", 0.07], // Green
  ["#faa61a", 0.12], // Lib Dem
  ["#0087dc", 0.17], // Conservative
  ["#9ca3af", 0.06], // Others
  ["#12b6cf", 0.38], // Reform
];

const HEMICYCLE = (() => {
  const dots: { x: number; y: number; angle: number }[] = [];
  for (let row = 0; row < 6; row++) {
    const radius = 18 + row * 4.6;
    const count = Math.round((Math.PI * radius) / 4.4);
    for (let i = 0; i < count; i++) {
      const angle = Math.PI - (i / (count - 1)) * Math.PI;
      dots.push({ x: 50 + radius * Math.cos(angle), y: 46 - radius * Math.sin(angle), angle });
    }
  }
  dots.sort((a, b) => b.angle - a.angle);
  return dots.map((dot, i) => {
    let share = i / dots.length;
    let color = PARTIES[PARTIES.length - 1][0];
    for (const [c, s] of PARTIES) {
      if (share < s) {
        color = c;
        break;
      }
      share -= s;
    }
    return { ...dot, color };
  });
})();

function HemicycleMotif() {
  return (
    <svg viewBox="0 0 100 62" className="w-full" aria-hidden>
      {HEMICYCLE.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.55" fill={d.color} />
      ))}
      <line
        x1="50"
        y1="4"
        x2="50"
        y2="48"
        stroke="rgba(255,255,255,0.35)"
        strokeDasharray="1.2 1.2"
        strokeWidth="0.4"
      />
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="4.2"
        fill="rgba(255,255,255,0.6)"
      >
        majority · 326
      </text>
    </svg>
  );
}

/* ---------- StockTracker: candlestick chart with moving average ---------- */

const CANDLES: [number, number, number, number][] = [
  // open, close, high, low
  [30, 34, 36, 28],
  [34, 32, 37, 30],
  [32, 38, 40, 31],
  [38, 36, 41, 34],
  [36, 42, 44, 35],
  [42, 40, 45, 38],
  [40, 46, 48, 39],
  [46, 44, 49, 42],
  [44, 50, 53, 43],
  [50, 48, 52, 45],
  [48, 55, 57, 47],
  [55, 60, 62, 53],
];

function CandleMotif({ accent }: { accent: string }) {
  const toY = (p: number) => 70 - (p - 24) * 1.6;
  const ma = CANDLES.map(
    ([o, c], i) => `${i === 0 ? "M" : "L"}${8 + i * 8},${toY((o + c) / 2)}`,
  ).join(" ");
  return (
    <svg viewBox="0 0 100 76" className="w-full" aria-hidden>
      {[20, 38, 56].map((y) => (
        <line
          key={y}
          x1="2"
          x2="98"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.4"
        />
      ))}
      {CANDLES.map(([o, c, h, l], i) => {
        const x = 8 + i * 8;
        const color = c >= o ? accent : "#f05252";
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={toY(h)} y2={toY(l)} stroke={color} strokeWidth="0.7" />
            <rect
              x={x - 2.4}
              width="4.8"
              y={toY(Math.max(o, c))}
              height={Math.max(1, Math.abs(o - c) * 1.6)}
              fill={color}
              rx="0.4"
            />
          </g>
        );
      })}
      <path d={ma} fill="none" stroke="#facc15" strokeWidth="0.8" opacity="0.8" />
      <rect
        x="66"
        y="2"
        width="32"
        height="10"
        rx="2"
        fill={`${accent}22`}
        stroke={`${accent}88`}
        strokeWidth="0.4"
      />
      <text
        x="82"
        y="8.8"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="4.6"
        fill={accent}
      >
        +18.4%
      </text>
    </svg>
  );
}

/* ---------- StockTracker Mobile: phone with portfolio summary ---------- */

const HOLDINGS: [string, string, boolean][] = [
  ["AAPL", "+1.2%", true],
  ["NVDA", "+3.8%", true],
  ["TSLA", "−0.9%", false],
  ["VUSA", "+0.4%", true],
];

function PhoneMotif({ accent }: { accent: string }) {
  const mono = "ui-monospace, monospace";
  const spark = "M8,46 L13,44 L18,45 L23,40 L28,41 L33,36 L38,37 L43,31 L48,32 L52,26";
  return (
    <svg viewBox="0 0 60 100" className="h-full max-h-full" aria-hidden>
      <rect
        x="1"
        y="1"
        width="58"
        height="98"
        rx="9"
        fill="#0b0b0b"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />
      <rect x="22" y="4.5" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
      <text x="8" y="17" fontFamily={mono} fontSize="3.6" fill="rgba(255,255,255,0.5)">
        PORTFOLIO
      </text>
      <text x="8" y="25" fontSize="7" fontWeight="600" fill="#fafafa">
        £12,480
      </text>
      <text x="8" y="31" fontFamily={mono} fontSize="3.6" fill={accent}>
        ▲ 2.31% today
      </text>
      <path d={`${spark} L52,50 L8,50 z`} fill={`${accent}22`} />
      <path d={spark} fill="none" stroke={accent} strokeWidth="1.2" strokeLinejoin="round" />
      {HOLDINGS.map(([sym, chg, up], i) => (
        <g key={sym} transform={`translate(0 ${58 + i * 9})`}>
          <rect x="6" y="0" width="48" height="7" rx="1.5" fill="rgba(255,255,255,0.05)" />
          <text x="9" y="4.8" fontFamily={mono} fontSize="3.4" fill="rgba(255,255,255,0.8)">
            {sym}
          </text>
          <text
            x="51"
            y="4.8"
            textAnchor="end"
            fontFamily={mono}
            fontSize="3.4"
            fill={up ? accent : "#f05252"}
          >
            {chg}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- Monolith: fx-CG50 screen in the RUN-MAT style ---------- */

function CalculatorMotif({ accent }: { accent: string }) {
  const mono = "ui-monospace, monospace";
  const statusLabels = ["Math", "Deg", "Norm1", "d/c", "Real"];
  const fkeys = ["JUMP", "DEL", "MAT", "MATH"];
  return (
    <svg viewBox="0 0 100 78" className="w-full" aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="99"
        height="77"
        rx="5"
        fill="#1d1f24"
        stroke={`${accent}66`}
        strokeWidth="0.8"
      />
      <rect x="5" y="5" width="90" height="68" rx="1.5" fill="#f4f6f2" />

      {/* status bar */}
      <rect x="5" y="5" width="90" height="7" fill="#dfe4ea" />
      {statusLabels.map((label, i) => (
        <g key={label} transform={`translate(${7 + i * 13.5} 6.4)`}>
          <rect width="12" height="4.2" rx="0.6" fill="none" stroke="#3b4252" strokeWidth="0.35" />
          <text x="6" y="3.25" textAnchor="middle" fontFamily={mono} fontSize="2.8" fill="#1f2937">
            {label}
          </text>
        </g>
      ))}

      {/* 1/2 + 1/3 = 5/6, as stacked fractions */}
      <g fontFamily={mono} fontSize="4" fill="#111">
        <text x="9" y="20">
          1
        </text>
        <line x1="8.4" x2="12.2" y1="21.6" y2="21.6" stroke="#111" strokeWidth="0.4" />
        <text x="9" y="26">
          2
        </text>
        <text x="14" y="23.2">
          +
        </text>
        <text x="19.5" y="20">
          1
        </text>
        <line x1="18.9" x2="22.7" y1="21.6" y2="21.6" stroke="#111" strokeWidth="0.4" />
        <text x="19.5" y="26">
          3
        </text>
        <text x="87" y="31">
          5
        </text>
        <line x1="86.3" x2="90.4" y1="32.6" y2="32.6" stroke="#111" strokeWidth="0.45" />
        <text x="87" y="37.2">
          6
        </text>
      </g>

      <line x1="7" x2="93" y1="40.5" y2="40.5" stroke="#cbd5e1" strokeWidth="0.3" />

      {/* ∫₀³ x² dx = 9 */}
      <g fontFamily={mono} fill="#111">
        <text x="8" y="51" fontSize="9">
          ∫
        </text>
        <text x="12.8" y="44.6" fontSize="2.8">
          3
        </text>
        <text x="12.4" y="52.4" fontSize="2.8">
          0
        </text>
        <text x="16" y="49.6" fontSize="4.2">
          x
        </text>
        <text x="18.7" y="47" fontSize="2.8">
          2
        </text>
        <text x="21.6" y="49.6" fontSize="4.2">
          dx
        </text>
        <text x="90.4" y="58" textAnchor="end" fontSize="4.2">
          9
        </text>
      </g>

      <rect x="8" y="61" width="0.6" height="4" fill={accent}>
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
      </rect>

      {/* F-key bar; F5/F6 are left free for FMENU.py */}
      {fkeys.map((label, i) => (
        <g key={label} transform={`translate(${5.6 + i * 15} 67.4)`}>
          <rect width="14" height="5" rx="0.4" fill="#111827" />
          <text x="7" y="3.6" textAnchor="middle" fontFamily={mono} fontSize="2.8" fill="#f9fafb">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- Exported covers ---------- */

export const DragonBotCover = () => (
  <Cover
    index="01"
    category="Chess AI"
    title="DragonBot V2"
    blurb="Lichess bot with a pluggable engine, matchmaking and time management."
    tags={["Python", "Chess engine", "Lichess"]}
    accent="#f59e0b"
  >
    <ChessMotif accent="#f59e0b" />
  </Cover>
);

export const MonolithCover = () => (
  <Cover
    index="02"
    category="Casio fx-CG50"
    title="Monolith"
    blurb="KhiCAS computer algebra, reskinned as the calculator's native RUN-MAT."
    tags={["C / C++", "Giac CAS", "Calculator"]}
    accent="#a78bfa"
  >
    <CalculatorMotif accent="#a78bfa" />
  </Cover>
);

export const StockTrackerCover = () => (
  <Cover
    index="03"
    category="Finance"
    title="StockTracker"
    blurb="Portfolio tracker with cost basis, live quotes and technical charts."
    tags={["TypeScript", "Charts", "Web"]}
    accent="#00d992"
  >
    <CandleMotif accent="#00d992" />
  </Cover>
);

export const ElectionTrackerCover = () => (
  <Cover
    index="04"
    category="UK Politics"
    title="ElectionTracker"
    blurb="Live polling and seat projection for the House of Commons."
    tags={["TypeScript", "Wikipedia API", "Live"]}
    accent="#f43f5e"
  >
    <HemicycleMotif />
  </Cover>
);

export const StockTrackerMobileCover = () => (
  <Cover
    index="05"
    category="Android"
    title="StockTracker Mobile"
    blurb="Companion app that keeps the portfolio in your pocket."
    tags={["TypeScript", "Android"]}
    accent="#38bdf8"
  >
    <PhoneMotif accent="#38bdf8" />
  </Cover>
);
