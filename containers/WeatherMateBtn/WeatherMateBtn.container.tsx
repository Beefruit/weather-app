"use client";

import { type FC } from "react";
import WeatherMateBtnPresenter from "./presenter/WeatherMateBtn.presenter";
import { useWeatherMateBtn } from "./hook/useWeatherMateBtn";

const WeatherMateBtnContainer: FC = () => {
  const { onClickBtn } = useWeatherMateBtn();
  return <WeatherMateBtnPresenter onClickBtn={onClickBtn} />;
};

export default WeatherMateBtnContainer;
