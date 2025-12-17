"use client";

import { create } from "zustand";

export interface IWeatherMatePayload {
  temperature: number;
  humidity: number;
  feelsLike: number;
  weather: string;
  windSpeed: number;
}

interface IWeatherMateModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  weatherData: IWeatherMatePayload | null;
  setWeatherData: (weatherData: IWeatherMatePayload | null) => void;

  isWeatherLoading: boolean;
  setIsWeatherLoading: (v: boolean) => void;

  isWeatherError: boolean;
  setIsWeatherError: (v: boolean) => void;
}

export const useWeatherMateModalStore = create<IWeatherMateModalStore>(
  (set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),

    weatherData: null,
    setWeatherData: (weatherData) => set({ weatherData }),

    isWeatherLoading: false,
    setIsWeatherLoading: (v) => set({ isWeatherLoading: v }),

    isWeatherError: false,
    setIsWeatherError: (v) => set({ isWeatherError: v }),
  })
);
