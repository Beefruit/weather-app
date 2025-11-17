"use client";

import { useState } from "react";
import { useSearchStore } from "@/store/searchQuery.store";

export const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchQuery, setSearchQuery } = useSearchStore();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.length === 0) {
      return;
    }

    setSearchQuery(searchValue);
  };

  return {
    searchValue,
    onChangeSearchValue,
    onSubmitSearch,
  };
};
