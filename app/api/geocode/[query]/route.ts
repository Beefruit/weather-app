import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ query: string }> }
) {
  try {
    const { query } = await params; // 🔥 여기서 Promise 해제

    const decoded = decodeURIComponent(query);

    const url = `${
      process.env.NEXT_PUBLIC_GEOCODE_API_URL
    }?address=${encodeURIComponent(decoded)}&key=${
      process.env.NEXT_PUBLIC_GEOCODE_API_KEY
    }`;

    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Google Geocode API" },
        { status: res.status }
      );
    }

    const data = await res.json();
    const location = data.results[0]?.geometry.location;

    return NextResponse.json(location, { status: 200 });
  } catch (err: any) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
