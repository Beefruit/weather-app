"use client";

import { useWeatherMateModalStore } from "@/store/weatherMateModal.store";

export const useWeatherMateBtn = () => {
  const { setIsOpen } = useWeatherMateModalStore();

  const onClickBtn = () => {
    setIsOpen(true);
  };

  return { onClickBtn };
};
