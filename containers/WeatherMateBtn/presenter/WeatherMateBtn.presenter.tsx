"use client";

import { type FC } from "react";
import styles from "./WeatherMateBtn.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IWeatherMateBtnPresenter {
  onClickBtn: () => void;
}

const WeatherMateBtnPresenter: FC<IWeatherMateBtnPresenter> = ({
  onClickBtn,
}) => {
  return (
    <button
      type="button"
      className={cx("weathermate-btn")}
      onClick={onClickBtn}
    >
      Weather Mate
    </button>
  );
};

export default WeatherMateBtnPresenter;
