import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_CONTRIBUTIONS_API_URL = "https://github-contributions-api.jogruber.de/v4/Timosdev99?y=last";

  try {
    console.log("Fetching GitHub contributions from:", GITHUB_CONTRIBUTIONS_API_URL);
    const res = await fetch(GITHUB_CONTRIBUTIONS_API_URL, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({ message: res.statusText }));
      console.error(`GitHub Contributions API returned non-OK status: ${res.status} ${res.statusText}`, errorData);
      throw new Error(errorData.message || `Failed to fetch GitHub contributions: ${res.status}`);
    }

    const json = await res.json();
    console.log("GitHub Contributions API response received successfully.");
    return NextResponse.json({ data: json }, { status: res.status });

  } catch (error) {
    console.error('Error fetching GitHub contributions in API route:', error);
    return NextResponse.json(
      { message: 'Error fetching GitHub contributions.', error: error.message },
      { status: 500 }
    );
  }
}
