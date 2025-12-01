"use client";

import { create } from "zustand";

interface IStyleOptions {
  style: string;
  favoriteColor: string;
  tempSensitivity: string;
}

interface IOnboardingStore {
  styleOptions: IStyleOptions;

  setStyleOptionsStyle: (style: string) => void;
  setStyleOptionsFavoriteColor: (style: string) => void;
  setStyleOptionsTempSensitivity: (style: string) => void;
}

export const useOnboardingStore = create<IOnboardingStore>((set) => ({
  styleOptions: {
    style: "",
    favoriteColor: "",
    tempSensitivity: "",
  },

  setStyleOptionsStyle: (style: string) =>
    set((state) => ({
      styleOptions: { ...state.styleOptions, style },
    })),
  setStyleOptionsFavoriteColor: (favoriteColor: string) =>
    set((state) => ({
      styleOptions: { ...state.styleOptions, favoriteColor },
    })),
  setStyleOptionsTempSensitivity: (tempSensitivity: string) =>
    set((state) => ({
      styleOptions: { ...state.styleOptions, tempSensitivity },
    })),
}));
