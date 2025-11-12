import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherResult.module.css";

const cx = classNames.bind(styles);

const WeatherResultPresenter: FC = () => {
  return (
    <div className={cx("home-result")}>
      <div className={cx("location")}>
        <h2 className={cx("city")}>파리</h2>
        <h2 className={cx("temperature")}>22&deg;C</h2>
        <p className={cx("weather")}>맑음</p>
      </div>
      <div className={cx("weather-information")}>
        <div className={cx("hummidity")}>
          <h2 className={cx("weather-title")}>습도</h2>
          <p className={cx("weather-description")}>45%</p>
        </div>
        <div className={cx("wind")}>
          <h2 className={cx("weather-title")}>풍속</h2>
          <p className={cx("weather-description")}>8Km/h</p>
        </div>
        <div className={cx("wind-chill")}>
          <h2 className={cx("weather-title")}>체감온도</h2>
          <p className={cx("weather-description")}>24&deg;C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherResultPresenter;
