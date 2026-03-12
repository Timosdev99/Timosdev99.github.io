"use client";
import { useEffect, useState } from "react";
import WakaStats from "../component/stat";
import GithubGraph from "../component/githubGraph";


export default function StatsPage() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch("/api/wakatime")
      .then((r) => r.json())
      .then((json) => {
        const d = json.data;
        if (!d) return;

        const bestDay = d.best_day || {};
        const os = d.operating_systems?.[0]?.name ?? "Linux";

        const daily = (d.projects ?? [])
          .sort((a, b) => b.total_seconds - a.total_seconds)
          .slice(0, 6)
          .map((p) => ({
            name: p.name.length > 12 ? p.name.slice(0, 11) + "…" : p.name,
            hours: parseFloat((p.total_seconds / 3600).toFixed(2)),
            text: p.text,
            seconds: p.total_seconds,
          }));

        setData({
          languages: d.languages ?? [],
          editors: d.editors ?? [],
          projects: d.projects ?? [],
          daily,
          summary: {
            total: d.human_readable_total ?? "—",
            dailyAverage: d.human_readable_daily_average ?? "—",
            bestDay: {
              date: bestDay.date
                ? new Date(bestDay.date + "T12:00:00").toLocaleDateString("en-US", {
                  month: "short", day: "numeric", year: "numeric",
                })
                : "—",
              text: bestDay.text ?? "—",
            },
            os,
            range: d.start && d.end
              ? `${d.start.slice(0, 10)} → ${d.end.slice(0, 10)}`
              : "last 7 days",
          },
        });
      })
      .catch((e) => {
        console.warn("WakaTime fetch failed, using static fallback:", e.message);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <WakaStats data={data} />
      <div style={{ padding: "0 40px 48px" }}>
        <GithubGraph username="timosdev99" />
      </div>
    </div>
  );
}
