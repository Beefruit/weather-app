"use client";

import { create } from "zustand";

export interface IStyleOptions {
  gender: string;
  style: string;
  favoriteColor: string;
  tempSensitivity: string;
}

interface IOnboardingStore {
  styleOptions: IStyleOptions;
  setStyleOptionsGender: (gender: string) => void;
  setStyleOptionsStyle: (style: string) => void;
  setStyleOptionsFavoriteColor: (style: string) => void;
  setStyleOptionsTempSensitivity: (style: string) => void;
}

export const useOnboardingStore = create<IOnboardingStore>((set) => ({
  styleOptions: {
    gender: "",
    style: "",
    favoriteColor: "",
    tempSensitivity: "",
  },

  setStyleOptionsGender: (gender: string) =>
    set((state) => ({
      styleOptions: { ...state.styleOptions, gender },
    })),
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
