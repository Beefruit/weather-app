"use client";

import { IStyleOptions } from "@/store/onboarding.store";

export const postWeatherMate = async (
  styleData: IStyleOptions,
  weatherData: {
    temperature: number;
    humidity: number;
    feelsLike: number;
    weather: string;
    windSpeed: number;
  },
  scheduleType: string
) => {
  const response = await fetch("/api/weatherMate/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...styleData,
      weatherData,
      scheduleType,
    }),
  });
  const { result } = await response.json();
  return result;
};
