import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;

    const lat = params.get("lat");
    const lon = params.get("lon");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?lat=${lat}&lon=${lon}&exclude=current&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weather data" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
