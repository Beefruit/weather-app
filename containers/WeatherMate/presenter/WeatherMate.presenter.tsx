"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherMate.module.css";

const cx = classNames.bind(styles);

const WeatherMatePresenter: FC = () => {
  return (
    <div className={cx("weathermate-container")}>
      <h2 className={cx("weathermate-title")}>Weather Mate</h2>
    </div>
  );
};
export default WeatherMatePresenter;
