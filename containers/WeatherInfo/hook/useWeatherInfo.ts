"use client";

import { useState, useEffect } from "react";
import { useSearchStore } from "@/store/searchQuery.store";
import { getGeocodeApi, getWeatherApi } from "../api/weatherInfo.api";

export const useWeatherInfo = () => {
  const { searchQuery } = useSearchStore();
  const [weatherInfo, setWeatherInfo] = useState<{
    temperature: number;
    weather: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
    iconUrl: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      if (searchQuery.length === 0) {
        return;
      }

      const data = await getGeocodeApi(searchQuery);

      const weatherData = await getWeatherApi({ lat: data.lat, lon: data.lng });

      setWeatherInfo({
        temperature: weatherData.daily[0].temp.eve,
        weather: weatherData.daily[0].weather[0].main,
        humidity: weatherData.daily[0].humidity,
        windSpeed: weatherData.daily[0].wind_speed,
        feelsLike: weatherData.daily[0].feels_like.eve,
        iconUrl: `http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}.png`,
      });
    })();
  }, [searchQuery]);

  return {
    searchQuery,
    weatherInfo,
  };
};
