"use client";

import { type FC } from "react";
import WeatherMatePresenter from "./presenter/WeatherMate.presenter";
import { useWeatherMate } from "./hook/useWeatherMate";
import { useWeatherMateModalStore } from "@/store/weatherMateModal.store";

const WeatherMateContainer: FC = () => {
  const { isOpen, onCloseBtn, outfitList, isLoading } = useWeatherMate();
  const { isWeatherLoading, weatherData } = useWeatherMateModalStore();
  return (
    <WeatherMatePresenter
      isOpen={isOpen}
      onCloseBtn={onCloseBtn}
      outfitList={outfitList}
      isLoading={isLoading}
      isWeatherLoading={isWeatherLoading}
      hasWeatherData={!!weatherData}
    />
  );
};

export default WeatherMateContainer;
