"use client";

import { type FC } from "react";
import styles from "./WeatherMateBtn.module.css";
import classNames from "classnames/bind";
import {
  Dumbbell,
  Heart,
  TentTree,
  HatGlasses,
  BriefcaseBusiness,
} from "lucide-react";

const cx = classNames.bind(styles);

interface IWeatherMateBtnPresenter {
  onClickBtn: (scheduleType: string) => void;
  schedule: { name: string; type: string };
}

const WeatherMateBtnPresenter: FC<IWeatherMateBtnPresenter> = ({
  onClickBtn,
  schedule,
}) => {
  const generateIcon = (type: string) => {
    switch (type) {
      case "work":
        return <BriefcaseBusiness />;
      case "exercise":
        return <Dumbbell />;
      case "date":
        return <Heart />;
      case "outdoor":
        return <TentTree />;
      case "formal":
        return <HatGlasses />;
      default:
        return "❓";
    }
  };

  return (
    <button
      type="button"
      data-type={schedule.type}
      className={cx("weathermate-btn")}
      onClick={() => onClickBtn(schedule.type)}
    >
      <span className={cx("icon-circle")}>{generateIcon(schedule.type)}</span>
      <span className={cx("label")}>{schedule.name}</span>
    </button>
  );
};

export default WeatherMateBtnPresenter;
