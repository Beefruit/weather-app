import { type FC } from "react";
import WeatherInitPresenter from "./presenter/WeatherInit.presenter";
import WeatherResultPresenter from "./presenter/WeatherResult.presenter";
import WeatherErrorPresenter from "./presenter/WeatherError.presenter";

const WeatherInfoContainer: FC = () => {
  return <WeatherInitPresenter />;
};

export default WeatherInfoContainer;
