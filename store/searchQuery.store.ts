"use client";

import { create } from "zustand";

interface ISearchStore {
  searchQuery: string;

  setSearchQuery: (query: string) => void;
}

export const useSearchStore = create<ISearchStore>((set) => ({
  searchQuery: "",

  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
