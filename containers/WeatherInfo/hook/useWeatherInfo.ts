"use client";

import { useEffect } from "react";
import { useSearchStore } from "@/store/searchQuery.store";
import { getGeocodeApi } from "../api/weatherInfo.api";

export const useWeatherInfo = () => {
  const { searchQuery } = useSearchStore();

  useEffect(() => {
    (async () => {
      if (searchQuery.length === 0) {
        return;
      }

      const data = await getGeocodeApi(searchQuery);

      console.log(data);
    })();
  }, [searchQuery]);

  return {
    searchQuery,
  };
};
