"use client";

import { type FC } from "react";
import WeatherInitPresenter from "./presenter/WeatherInit.presenter";
import WeatherResultPresenter from "./presenter/WeatherResult.presenter";
import WeatherErrorPresenter from "./presenter/WeatherError.presenter";
import { useWeatherInfo } from "./hook/useWeatherInfo";

const WeatherInfoContainer: FC = () => {
  const { searchQuery } = useWeatherInfo();

  return (
    <>
      {searchQuery.length === 0 ? (
        <WeatherInitPresenter />
      ) : (
        <WeatherResultPresenter searchQuery={searchQuery} />
      )}
    </>
  );
};

export default WeatherInfoContainer;
