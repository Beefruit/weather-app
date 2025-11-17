import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherResult.module.css";
import { Droplets, Wind, Thermometer } from "lucide-react";

const cx = classNames.bind(styles);

interface IWeatherResultPresenterProps {
  searchQuery: string;
}

const WeatherResultPresenter: FC<IWeatherResultPresenterProps> = ({
  searchQuery,
}) => {
  return (
    <div className={cx("home-result")}>
      <div className={cx("location")}>
        <h2 className={cx("city")}>{searchQuery}</h2>
        <h2 className={cx("temperature")}>22&deg;C</h2>
        <p className={cx("weather")}>맑음</p>
      </div>
      <ul className={cx("weather-information")}>
        <li className={cx("weather-item")}>
          <Droplets size={24} className={cx("humidity-icon")} />
          <h2 className={cx("weather-title")}>습도</h2>
          <p className={cx("weather-description")}>45%</p>
        </li>
        <li className={cx("weather-item")}>
          <Wind size={24} className={cx("wind-icon")} />
          <h2 className={cx("weather-title")}>풍속</h2>
          <p className={cx("weather-description")}>8Km/h</p>
        </li>
        <li className={cx("weather-item")}>
          <Thermometer size={24} className={cx("wind-chill-icon")} />
          <h2 className={cx("weather-title")}>체감온도</h2>
          <p className={cx("weather-description")}>24&deg;C</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherResultPresenter;
