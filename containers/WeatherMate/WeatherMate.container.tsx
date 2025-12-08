"use client";

import { type FC } from "react";
import WeatherMatePresenter from "./presenter/WeatherMate.presenter";
import { useWeatherMate } from "./hook/useWeatherMate";

const WeatherMateContainer: FC = () => {
  const { isOpen, onCloseBtn } = useWeatherMate();
  return <WeatherMatePresenter isOpen={isOpen} onCloseBtn={onCloseBtn} />;
};

export default WeatherMateContainer;
