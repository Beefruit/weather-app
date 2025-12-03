"use client";

import { use, type FC } from "react";
import WeatherMatePresenter from "./presenter/WeatherMate.presenter";
import { useWeatherMate } from "./hook/useWeatherMate";

const WeatherMateContainer: FC = () => {
  useWeatherMate();
  return <WeatherMatePresenter />;
};

export default WeatherMateContainer;
