"use client";

import { useWeatherMateModalStore } from "@/store/weatherMateModal.store";
import { postWeatherMate } from "../api/weatherMate.api";
import { useOnboardingStore } from "@/store/onboarding.store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IOutfitData } from "../types";

export const useWeatherMate = () => {
  const router = useRouter();
  const [outfitList, setOutfitList] = useState<IOutfitData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, setIsOpen, weatherData } = useWeatherMateModalStore();
  const { styleOptions } = useOnboardingStore();

  const onCloseBtn = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen || outfitList.length > 0) {
      return;
    }

    if (
      styleOptions.gender === "" ||
      styleOptions.style === "" ||
      styleOptions.favoriteColor === "" ||
      styleOptions.tempSensitivity === ""
    ) {
      setIsOpen(false);

      router.replace("/onboarding");
      return;
    }

    (async () => {
      try {
        setIsLoading(true);

        if (!weatherData) {
          return;
        }

        const result = await postWeatherMate(styleOptions, weatherData);
        setOutfitList(result["outfit_suggestions"]);
      } catch (error) {
        console.error("Failed to generate WeatherMate recommendation:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isOpen, weatherData]);

  return {
    isOpen,
    onCloseBtn,
    outfitList,
    isLoading,
  };
};
