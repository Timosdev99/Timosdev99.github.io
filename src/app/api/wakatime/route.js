export const revalidate = 3600;

const WAKATIME_API_URL = "https://wakatime.com/api/v1/users/current/stats/last_7_days";

export async function GET() {
  try {
    const token = `Basic ${Buffer.from(`${process.env.WAKATIME_API_KEY}:`).toString("base64")}`;
    const res = await fetch(WAKATIME_API_URL, {
      headers: { Authorization: token },
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`WakaTime API returned ${res.status}`, await res.text());
      return Response.json({ error: `WakaTime API returned ${res.status}` }, { status: 502 });
    }

    const data = await res.json();

    return Response.json(data, {
      headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate" },
    });
  } catch (e) {
    console.error("WakaTime fetch failed:", e.message);
    return Response.json({ error: e.message }, { status: 500 });
  }
}