"use client";

import { type FC } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/modal/Modal";
import classNames from "classnames/bind";
import styles from "./WeatherMate.module.css";

const cx = classNames.bind(styles);

interface IWeatherMatePresenterProps {
  isOpen: boolean;
  onCloseBtn: () => void;
}

const WeatherMatePresenter: FC<IWeatherMatePresenterProps> = ({
  isOpen,
  onCloseBtn,
}) => {
  if (!isOpen) return null;
  return createPortal(
    <Modal onCloseBtn={onCloseBtn}>
      <div className={cx("weathermate-container")}>
        <h2 className={cx("weathermate-title")}>Weather Mate</h2>
      </div>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};
export default WeatherMatePresenter;
