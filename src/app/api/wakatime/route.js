import { execSync } from "child_process";

export async function GET() {
  try {
    const raw = execSync(
      `curl -s -u "${process.env.WAKATIME_API_KEY}:" "https://wakatime.com/api/v1/users/current/stats/last_7_days"`,
      { timeout: 10000 }
    ).toString();
    const res = JSON.parse(raw);
    const data = JSON.parse(raw);

    return Response.json(data);
  } catch (e) {
    console.error("WakaTime curl failed:", e.message);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
