import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REVERSE_GEOCODE_API_URL}?latlng=${lat},${lon}&language=ko&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch from Google Reverse Geocode API" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data, { status: 200 });
}
