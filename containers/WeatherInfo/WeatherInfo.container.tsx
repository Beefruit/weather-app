"use client";

import { type FC } from "react";
import WeatherInitPresenter from "./presenter/WeatherInit.presenter";
import WeatherResultPresenter from "./presenter/WeatherResult.presenter";
import WeatherErrorPresenter from "./presenter/WeatherError.presenter";
import { useWeatherInfo } from "./hook/useWeatherInfo";

const WeatherInfoContainer: FC = () => {
  const { searchQuery, weatherData, isSearchError, locationName } =
    useWeatherInfo();

  return (
    <>
      {isSearchError ? (
        <WeatherErrorPresenter />
      ) : (
        <WeatherResultPresenter
          searchQuery={searchQuery}
          weatherData={weatherData}
          locationName={locationName}
        />
      )}
    </>
  );
};

export default WeatherInfoContainer;
