" use client";

export const getGeocodeApi = async (searchQuery: string) => {
  const res = await fetch(`/api/geocode/${searchQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("에러!!");
  }

  const data = await res.json();

  return data;
};

export const getWeatherApi = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("에러!!");
  }

  const data = await res.json();

  return data;
};
