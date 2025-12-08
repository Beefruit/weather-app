"use client";

import { IStyleOptions } from "@/store/onboarding.store";

export const postWeatherMate = async (
  styleData: IStyleOptions,
  weatherData: {
    temperature: number;
    humidity: number;
    feelsLike: number;
    weather: string;
    windspeed: number;
  }
) => {
  const response = await fetch("/api/weatherMate/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...styleData,
      weatherData,
    }),
  });
  const data = await response.json();

  console.log("data:", data);
  return data;
};
