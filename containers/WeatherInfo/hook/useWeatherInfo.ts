"use client";

import { useState, useEffect } from "react";
import { useSearchStore } from "@/store/searchQuery.store";
import {
  getGeocodeApi,
  getReverseGeocodeApi,
  getWeatherApi,
} from "../api/weatherInfo.api";
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
  const [locationName, setLocationName] = useState<string | null>(null);
  const [isLocationError, setIsLocationError] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);

  useEffect(() => {
    if (searchQuery.length === 0) {
      return;
    }
    (async () => {
      try {
        const { lat, lng } = await getGeocodeApi(searchQuery);

        const weatherData = await getWeatherApi(lat, lng);

        setWeatherData({
          temperature: weatherData.current.temp,
          humidity: weatherData.current.humidity,
          feelsLike: weatherData.current.feels_like,
          weather: formatWeatherToKorean(weatherData.current.weather[0].main),
          weatherIcon: weatherData.current.weather[0].icon,
          windSpeed: weatherData.current.wind_speed,
        });

        if (isSearchError) {
          setIsSearchError(false);
        }
      } catch (error) {
        setIsSearchError(true);
      }
    })();
  }, [searchQuery]);

  useEffect(() => {
    (async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const weatherData = await getWeatherApi(lat, lng);

            const address = await getReverseGeocodeApi(lat, lng);

            setLocationName(address);

            setWeatherData({
              temperature: weatherData.current.temp,
              humidity: weatherData.current.humidity,
              feelsLike: weatherData.current.feels_like,
              weather: formatWeatherToKorean(
                weatherData.current.weather[0].main
              ),
              weatherIcon: weatherData.current.weather[0].icon,
              windSpeed: weatherData.current.wind_speed,
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    })();
  }, []);

  return {
    isSearchError,
    searchQuery,
    weatherData,
    locationName,
  };
};
