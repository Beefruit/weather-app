"use client";

import { useState, useEffect } from "react";
import { useSearchStore } from "@/store/searchQuery.store";
import { getGeocodeApi, getWeatherApi } from "../api/weatherInfo.api";
import { formatWeatherToKorean } from "../domain";

export const useWeatherInfo = () => {
  const { searchQuery } = useSearchStore();
  const [weatherData, setWeatherData] = useState<{
    temperature: number;
    humidity: number;
    feelsLike: number;
    weather: string;
    weatherIcon: string;
    windSpeed: number;
  } | null>(null);

  useEffect(() => {
    (async () => {
      if (searchQuery.length === 0) {
        return;
      }

      const data = await getGeocodeApi(searchQuery);

      const weatherData = await getWeatherApi(data.lat, data.lng);

      console.log(weatherData);

      setWeatherData({
        temperature: weatherData.current.temp,
        humidity: weatherData.current.humidity,
        feelsLike: weatherData.current.feels_like,
        weather: formatWeatherToKorean(weatherData.current.weather[0].main),
        weatherIcon: weatherData.current.weather[0].icon,
        windSpeed: weatherData.current.wind_speed,
      });
    })();
  }, [searchQuery]);

  return {
    searchQuery,
    weatherData,
  };
};
