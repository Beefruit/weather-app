"use client";

import { create } from "zustand";

interface IWeatherMateModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useWeatherMateModalStore = create<IWeatherMateModalStore>(
  (set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
  })
);
