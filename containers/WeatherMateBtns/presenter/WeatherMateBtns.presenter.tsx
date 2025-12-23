"use client";

import { type FC } from "react";
import styles from "./WeatherMateBtns.module.css";
import classNames from "classnames/bind";
import WeatherMateBtnPresenter from "./WeatherMateBtn.presenter";

const cx = classNames.bind(styles);

interface IWeatherMateBtnPresenterProps {
  onClickBtn: (scheduleType: string) => void;
  TODAY_SCEDULES: { name: string; type: string }[];
}

const WeatherMateBtnsPresenter: FC<IWeatherMateBtnPresenterProps> = ({
  onClickBtn,
  TODAY_SCEDULES,
}) => {
  return (
    <div className={cx("weathermate-btns")}>
      <h2 className={cx("title")}>오늘의 일정</h2>
      <div className={cx("btns-list")}>
        {TODAY_SCEDULES.map((schedule) => (
          <WeatherMateBtnPresenter
            key={schedule.name}
            onClickBtn={onClickBtn}
            schedule={schedule}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherMateBtnsPresenter;
