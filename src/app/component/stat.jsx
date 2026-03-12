"use client";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";

const LANG_COLORS = [
  "#5b8dee", "#f7c948", "#b07219", "#083fa1",
  "#e34c26", "#563d7c", "#89e051", "#384d54",
];

const EDITOR_COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

const PROJECT_COLORS = [
  "#5b8dee", "#22c55e", "#f7c948", "#f472b6", "#a78bfa", "#38bdf8",
];


function fmtHrs(decimal) {
  const h = Math.floor(decimal);
  const m = Math.round((decimal - h) * 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}


function DonutTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: "#1e2533", border: "1px solid #2d3748",
      borderRadius: 8, padding: "8px 14px",
      fontSize: 13, color: "#e2e8f0",
    }}>
      <strong style={{ color: "#fff" }}>{d.name}</strong>
      <div style={{ color: "#94a3b8", marginTop: 2 }}>{d.text} — {d.percent.toFixed(1)}%</div>
    </div>
  );
}


function BarTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#1e2533", border: "1px solid #2d3748",
      borderRadius: 8, padding: "8px 14px",
      fontSize: 13, color: "#e2e8f0",
    }}>
      <strong style={{ color: "#fff" }}>{label}</strong>
      <div style={{ color: "#94a3b8", marginTop: 2 }}>
        {fmtHrs(payload[0].value)}
      </div>
    </div>
  );
}

function DonutCard({ title, data, colors, subtitle }) {
  return (
    <div style={{
      background: "#151b27", border: "1px solid #1e2a3a",
      borderRadius: 12, padding: "20px 20px 16px",
      display: "flex", flexDirection: "column", gap: 12,
    }}>
      <div>
        <p style={{
          fontSize: 11, color: "#64748b", letterSpacing: "0.08em",
          textTransform: "uppercase", marginBottom: 4
        }}>
          {title}
        </p>
        {subtitle && (
          <p style={{ fontSize: 12, color: "#475569" }}>{subtitle}</p>
        )}
      </div>

      <PieChart width={260} height={200} style={{ margin: "0 auto" }}>
        <Pie
          data={data}
          cx={130} cy={100}
          innerRadius={60} outerRadius={90}
          paddingAngle={2}
          dataKey="percent"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<DonutTooltip />} />
      </PieChart>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {data.slice(0, 6).map((item, i) => (
          <div key={item.name} style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: 8,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{
                width: 8, height: 8, borderRadius: 2, flexShrink: 0,
                background: colors[i % colors.length],
              }} />
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{item.name}</span>
            </div>
            <span style={{ fontSize: 11, color: "#64748b", whiteSpace: "nowrap" }}>
              {item.percent.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WakaStats({ data = {} }) {
  const {
    languages = [],
    editors = [],
    projects = [],
    summary = { bestDay: {} }
  } = data;

  const barData = projects.map(p => ({
    name: p.name.length > 10 ? p.name.slice(0, 9) + "…" : p.name,
    hours: parseFloat(p.percent / 10),
    fullName: p.name,
    text: p.text,
  }));

  return (
    <>
      <style>{`
        .waka-page {
        
          min-height: 100vh;
          padding: 48px 40px;
          font-family: sans-serif;
          color: #e2e8f0;
        }
        .waka-title {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .waka-summary {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .waka-stat-pill {
          background: #151b27;
          border: 1px solid #1e2a3a;
          border-radius: 10px;
          padding: 14px 20px;
        }
        .waka-stat-label {
          font-size: 11px;
          color: #64748b;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .waka-stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.3px;
        }
        .waka-stat-sub {
          font-size: 11px;
          color: #475569;
          margin-top: 2px;
        }

               .waka-grid {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 20px;
          align-items: start;
        }

               .waka-bar-card {
          background: #151b27;
          border: 1px solid #1e2a3a;
          border-radius: 12px;
          padding: 20px 16px 12px;
        }
        .waka-bar-title {
          font-size: 11px;
          color: "#5b8dee";
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
          color: #5b8dee;
        }
        .waka-right-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .waka-caption {
          font-size: clamp(15px, 1.8vw, 20px);
          color: #94a3b8;
          line-height: 1.6;
          padding: 8px 0;
        }

        @media (max-width: 900px) {
          .waka-grid {
            grid-template-columns: 1fr;
          }
          .waka-page { padding: 32px 20px; }
        }
      `}</style>

      <div className="waka-page">
        <p className="waka-title">Coding Activity — Last 7 Days</p>

        <div className="waka-summary">
          {[
            { label: "Total", value: summary.total },
            { label: "Daily Avg", value: summary.dailyAverage },
            { label: "Best Day", value: summary.bestDay.text, sub: summary.bestDay.date },
            { label: "OS", value: summary.os },
            { label: "Range", value: summary.range },
          ].map(({ label, value, sub }) => (
            <div className="waka-stat-pill" key={label}>
              <p className="waka-stat-label">{label}</p>
              <p className="waka-stat-value">{value}</p>
              {sub && <p className="waka-stat-sub">{sub}</p>}
            </div>
          ))}
        </div>

        <div className="waka-grid">

          <DonutCard
            title="Languages · Last 7 Days"
            subtitle="Powered by wakatime.com"
            data={languages}
            colors={LANG_COLORS}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            <p className="waka-caption">
              Always be writing. Code? notes?<br />
              Here are my top projects.
            </p>

            <div className="waka-bar-card">
              <p className="waka-bar-title">Projects · Last 7 Days — Powered by wakatime.com</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={barData} barCategoryGap="35%">
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    axisLine={false} tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    axisLine={false} tickLine={false}
                    tickFormatter={v => `${v.toFixed(0)}h`}
                    width={32}
                  />
                  <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="hours" fill="#5b8dee" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="waka-right-col">
            <DonutCard
              title="Editors · Last 7 Days"
              subtitle="Powered by wakatime.com"
              data={editors}
              colors={EDITOR_COLORS}
            />
            <DonutCard
              title="Top Projects"
              data={projects.slice(0, 5)}
              colors={PROJECT_COLORS}
            />
          </div>

        </div>
      </div>
    </>
  );
}
