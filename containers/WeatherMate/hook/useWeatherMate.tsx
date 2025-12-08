"use client";

import { useWeatherMateModalStore } from "@/store/weatherMateModal.store";
import { postWeatherMate } from "../api/weatherMate.api";
import { useOnboardingStore } from "@/store/onboarding.store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useWeatherMate = () => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useWeatherMateModalStore();
  const { styleOptions } = useOnboardingStore();

  const onCloseBtn = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
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
        await postWeatherMate(styleOptions, {
          temperature: 22,
          humidity: 60,
          feelsLike: 21,
          weather: "맑음",
          windspeed: 3.5,
        });
      } catch (error) {
        console.error("Failed to generate WeatherMate recommendation:", error);
      }
    })();
  }, [isOpen]);

  return {
    isOpen,
    onCloseBtn,
  };
};
