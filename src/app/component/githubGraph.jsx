"use client";
import React, { useEffect, useState } from "react";

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;

const COLORS = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LBLS = ["", "Mon", "", "Wed", "", "Fri", ""];

function toWeeks(contributions) {
  if (!contributions?.length) return [];
  const sorted = [...contributions].sort((a, b) => a.date.localeCompare(b.date));
  const weeks = [];
  let week = [];
  const dow = new Date(sorted[0].date + "T12:00:00").getDay();
  for (let i = 0; i < dow; i++) week.push(null);
  for (const day of sorted) {
    week.push(day);
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function getMonthLabels(weeks) {
  const out = []; let last = -1;
  weeks.forEach((w, i) => {
    const d = w.find(Boolean);
    if (!d) return;
    const m = new Date(d.date + "T12:00:00").getMonth();
    if (m !== last) { out.push({ col: i, m }); last = m; }
  });
  return out;
}

export default function GithubGraph() {
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {

    fetch("/api/github-contributions")
      .then(r => r.json())
      .then(json => {
        if (!json.data) return;
        const contributions = json.data.contributions ?? [];
        setContributions(contributions);

        const t = json.data.total;
        const apiTotal = typeof t === "number" ? t
          : t?.lastYear ?? t?.["2025"] ?? t?.["2026"] ?? 0;

        setTotal(apiTotal || contributions.reduce((s, c) => s + (c.count || 0), 0));
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  const weeks = toWeeks(contributions);
  const labels = getMonthLabels(weeks);
  const DAY_W = 28;

  return (
    <>
      <style>{`
           .gh-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
      }
      .gh-ttl {
        font: 600 13px/1 sans-serif;
        color: #e6edf3;
      }
      .gh-lnk {
        font: 11px sans-serif;
        color: #7d8590;
        text-decoration: none;
      }
      .gh-lnk:hover { color: #58a6ff; }

           .gh-scroll {
        overflow-x: auto;
        overflow-y: visible;
        scrollbar-width: thin;
        scrollbar-color: #30363d transparent;
      }
      .gh-scroll::-webkit-scrollbar { height: 3px; }
      .gh-scroll::-webkit-scrollbar-thumb { background: #30363d; border-radius: 2px; }

      .gh-inner {
        display: inline-block;
        min-width: 100%;
      }

           .gh-mrow {
        position: relative;
        height: 16px;
        padding-left: ${DAY_W + 6}px;
        margin-bottom: 4px;
        box-sizing: border-box;
      }
      .gh-mlbl {
        position: absolute;
        font: 11px sans-serif;
        color: #7d8590;
        white-space: nowrap;
      }

           .gh-body { display: flex; align-items: flex-start; }

      .gh-dlbls {
        display: flex;
        flex-direction: column;
        gap: ${GAP}px;
        width: ${DAY_W}px;
        margin-right: 6px;
        flex-shrink: 0;
      }
      .gh-dlbl {
        font: 10px sans-serif;
        color: #7d8590;
        height: ${CELL}px;
        line-height: ${CELL}px;
        text-align: right;
        padding-right: 2px;
      }

      .gh-cols { display: flex; gap: ${GAP}px; }
      .gh-col  { display: flex; flex-direction: column; gap: ${GAP}px; }

      .gh-cell {
        width: ${CELL}px;
        height: ${CELL}px;
        border-radius: 2px;
        cursor: pointer;
        flex-shrink: 0;
        outline: 1px solid rgba(255,255,255,0.06);
        transition: outline-color 0.1s;
      }
      .gh-cell:hover { outline-color: rgba(255,255,255,0.4); }
      .gh-empty {
        width: ${CELL}px;
        height: ${CELL}px;
        flex-shrink: 0;
      }

      /* footer row */
      .gh-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        flex-wrap: wrap;
        gap: 6px;
      }
      .gh-foot-note {
        font: 11px sans-serif;
        color: #7d8590;
      }
      .gh-leg {
        display: flex;
        align-items: center;
        gap: 4px;
        font: 11px sans-serif;
        color: #7d8590;
      }
      .gh-lc {
        width: ${CELL}px;
        height: ${CELL}px;
        border-radius: 2px;
        flex-shrink: 0;
        outline: 1px solid rgba(255,255,255,0.06);
      }

   
      .gh-tip {
        position: fixed;
        background: #1c2128;
        border: 1px solid #30363d;
        border-radius: 6px;
        padding: 6px 10px;
        font: 12px sans-serif;
        color: #e6edf3;
        pointer-events: none;
        z-index: 9999;
        white-space: nowrap;
        transform: translate(-50%, calc(-100% - 8px));
        box-shadow: 0 4px 16px rgba(0,0,0,0.6);
      }
      .gh-tip strong { color: #fff; }
      `}</style>

      <div >

        <div className="gh-head">
          <span className="gh-ttl">
            {loading
              ? "Loading contributions…"
              : `${total.toLocaleString()} contributions in the last year`}
          </span>
          <a
            className="gh-lnk"
            href="https://github.com/Timosdev99"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Timosdev99 ↗
          </a>
        </div>

        {!loading && weeks.length > 0 && (
          <div className="gh-scroll">
            <div className="gh-inner">

              <div className="gh-mrow">
                {labels.map(({ col, m }) => (
                  <span
                    key={`${col}-${m}`}
                    className="gh-mlbl"
                    style={{ left: DAY_W + 6 + col * STEP }}
                  >
                    {MONTHS[m]}
                  </span>
                ))}
              </div>


              <div className="gh-body">
                <div className="gh-dlbls">
                  {DAY_LBLS.map((d, i) => (
                    <div key={i} className="gh-dlbl">{d}</div>
                  ))}
                </div>

                <div className="gh-cols">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="gh-col">
                      {week.map((day, di) =>
                        day === null ? (
                          <div key={di} className="gh-empty" />
                        ) : (
                          <div
                            key={di}
                            className="gh-cell"
                            style={{ background: COLORS[Math.min(day.level ?? 0, 4)] }}
                            onMouseEnter={(e) => {
                              const r = e.target.getBoundingClientRect();
                              setTooltip({ x: r.left + r.width / 2, y: r.top, ...day });
                            }}
                            onMouseLeave={() => setTooltip(null)}
                          />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>


      {tooltip && (
        <div className="gh-tip" style={{ left: tooltip.x, top: tooltip.y }}>
          <strong>
            {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
          </strong>
          {" on "}
          {new Date(tooltip.date + "T12:00:00").toLocaleDateString("en-US", {
            weekday: "short", month: "short", day: "numeric", year: "numeric",
          })}
        </div>
      )}
    </>
  );
}
