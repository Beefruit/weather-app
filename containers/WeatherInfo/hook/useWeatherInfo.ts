"use client";

import { useState, useEffect } from "react";
import { useSearchStore } from "@/store/searchQuery.store";
import {
  getGeocodeApi,
  getReverseGeocodeApi,
  getWeatherApi,
} from "../api/weatherInfo.api";
import { formatWeatherToKorean } from "../domain";
import { useWeatherMateModalStore } from "@/store/weatherMateModal.store";

interface IWeatherData {
  temperature: number;
  humidity: number;
  feelsLike: number;
  weather: string;
  weatherIcon: string;
  windSpeed: number;
}

export const useWeatherInfo = () => {
  const { searchQuery } = useSearchStore();
  const {
    setWeatherData: setWeatherDataStore,
    setIsWeatherLoading,
    setIsWeatherError,
  } = useWeatherMateModalStore();
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const [locationName, setLocationName] = useState<string | null>(null);
  const [isLocationError, setIsLocationError] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);

  const storeWeatherData = (weatherData: IWeatherData) => {
    setWeatherData(weatherData);
    setWeatherDataStore({
      temperature: weatherData.temperature,
      humidity: weatherData.humidity,
      feelsLike: weatherData.feelsLike,
      weather: weatherData.weather,
      windSpeed: weatherData.windSpeed,
    });
  };

  useEffect(() => {
    if (searchQuery.length === 0) {
      return;
    }
    (async () => {
      try {
        setIsWeatherLoading(true);
        setIsWeatherError(false);

        const { lat, lng } = await getGeocodeApi(searchQuery);

        const weatherData = await getWeatherApi(lat, lng);

        storeWeatherData({
          temperature: weatherData.current.temp,
          humidity: weatherData.current.humidity,
          feelsLike: weatherData.current.feels_like,
          weather: formatWeatherToKorean(weatherData.current.weather[0].main),
          weatherIcon: weatherData.current.weather[0].icon,
          windSpeed: weatherData.current.wind_speed,
        });

        if (isSearchError) {
          setIsSearchError(false);
          setIsWeatherError(false);
        }
      } catch (error) {
        setIsSearchError(true);
        setIsWeatherError(true);
      } finally {
        setIsWeatherLoading(false);
      }
    })();
  }, [searchQuery]);

  useEffect(() => {
    (async () => {
      if (navigator.geolocation) {
        setIsWeatherLoading(true);
        setIsWeatherError(false);

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;

              const weatherData = await getWeatherApi(lat, lng);

              const address = await getReverseGeocodeApi(lat, lng);

              setLocationName(address);

              storeWeatherData({
                temperature: weatherData.current.temp,
                humidity: weatherData.current.humidity,
                feelsLike: weatherData.current.feels_like,
                weather: formatWeatherToKorean(
                  weatherData.current.weather[0].main
                ),
                weatherIcon: weatherData.current.weather[0].icon,
                windSpeed: weatherData.current.wind_speed,
              });
            } catch (e) {
              setIsWeatherError(true);
            } finally {
              setIsWeatherLoading(false);
            }
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
