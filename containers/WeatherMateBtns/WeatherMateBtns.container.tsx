"use client";

import { type FC } from "react";
import { useWeatherMateBtn } from "./hook/useWeatherMateBtns";
import WeatherMateBtnsPresenter from "./presenter/WeatherMateBtns.presenter";

const WeatherMateBtnsContainer: FC = () => {
  const { onClickBtn, TODAY_SCEDULES } = useWeatherMateBtn();
  return (
    <WeatherMateBtnsPresenter
      onClickBtn={onClickBtn}
      TODAY_SCEDULES={TODAY_SCEDULES}
    />
  );
};

export default WeatherMateBtnsContainer;
