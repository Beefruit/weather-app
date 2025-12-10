"use client";

import { type FC } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/modal/Modal";
import classNames from "classnames/bind";
import styles from "./WeatherMate.module.css";
import ProgressbarPresenter from "./PrograssBar.presenter";
import { IOutfitData } from "../types";
import { formatTypeToInitial, formatTypeToKorean } from "../domain";

const cx = classNames.bind(styles);

interface IWeatherMatePresenterProps {
  isOpen: boolean;
  onCloseBtn: () => void;
  outfitList: IOutfitData[];
}

const WeatherMatePresenter: FC<IWeatherMatePresenterProps> = ({
  isOpen,
  onCloseBtn,
  outfitList,
}) => {
  if (!isOpen) return null;
  return createPortal(
    <Modal onCloseBtn={onCloseBtn}>
      <ProgressbarPresenter />
      <div className={cx("weathermate-container")}>
        <h2 className={cx("weathermate-title")}>Weather Mate</h2>
        <div className={cx("weathermate-items")}>
          {outfitList[0]?.items.map((item, index) => (
            <div key={index} className={cx("weathermate-item")}>
              <span className={cx("weathermate-item__badge")}>
                {formatTypeToInitial(item.type)}
              </span>
              <div className={cx("weathermate-item__detail")}>
                <h3 className={cx("title")}>{formatTypeToKorean(item.type)}</h3>
                <p className={cx("description")}>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <span className={cx("weathermate-line")} />
        <div className={cx("weathermate-tip")}>
          <h3 className={cx("title")}>Weather Tip</h3>
          {outfitList[0]?.tips.map((tip, index) => (
            <p key={index} className={cx("description")}>
              {tip}
            </p>
          ))}
        </div>
      </div>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};
export default WeatherMatePresenter;
