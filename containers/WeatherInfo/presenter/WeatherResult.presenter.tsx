import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherResult.module.css";
import { Droplets, Wind, Thermometer } from "lucide-react";

const cx = classNames.bind(styles);

interface IWeatherResultPresenterProps {
  searchQuery: string;
  weatherData: {
    temperature: number;
    humidity: number;
    feelsLike: number;
    weather: string;
    weatherIcon: string;
    windSpeed: number;
  } | null;
}

const WeatherResultPresenter: FC<IWeatherResultPresenterProps> = ({
  searchQuery,
  weatherData,
}) => {
  return (
    <div className={cx("home-result")}>
      <div className={cx("location")}>
        <h2 className={cx("city")}>{searchQuery}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.weatherIcon}@2x.png`}
          alt={weatherData?.weather}
        />
        <h2 className={cx("temperature")}>{weatherData?.temperature}&deg;C</h2>
        <p className={cx("weather")}>{weatherData?.weather}</p>
      </div>
      <ul className={cx("weather-information")}>
        <li className={cx("weather-item")}>
          <Droplets size={24} className={cx("humidity-icon")} />
          <h2 className={cx("weather-title")}>습도</h2>
          <p className={cx("weather-description")}>{weatherData?.humidity}%</p>
        </li>
        <li className={cx("weather-item")}>
          <Wind size={24} className={cx("wind-icon")} />
          <h2 className={cx("weather-title")}>풍속</h2>
          <p className={cx("weather-description")}>
            {weatherData?.windSpeed}Km/h
          </p>
        </li>
        <li className={cx("weather-item")}>
          <Thermometer size={24} className={cx("wind-chill-icon")} />
          <h2 className={cx("weather-title")}>체감온도</h2>
          <p className={cx("weather-description")}>
            {weatherData?.feelsLike}&deg;C
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherResultPresenter;
