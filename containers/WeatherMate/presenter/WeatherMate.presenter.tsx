"use client";

import { type FC } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/modal/Modal";
import classNames from "classnames/bind";
import styles from "./WeatherMate.module.css";
import ProgressbarPresenter from "./PrograssBar.presenter";

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
      <ProgressbarPresenter />
      <div className={cx("weathermate-container")}>
        <h2 className={cx("weathermate-title")}>Weather Mate</h2>
        <div className={cx("weathermate-items")}>
          <div className={cx("weathermate-item")}>
            <span className={cx("weathermate-item__badge")}>T</span>
            <div className={cx("weathermate-item__detail")}>
              <h3 className={cx("title")}>상의</h3>
              <p className={cx("description")}>반팔 티셔츠, 셔츠, 블라우스</p>
            </div>
          </div>
          <div className={cx("weathermate-item")}>
            <span className={cx("weathermate-item__badge")}>T</span>
            <div className={cx("weathermate-item__detail")}>
              <h3 className={cx("title")}>상의</h3>
              <p className={cx("description")}>반팔 티셔츠, 셔츠, 블라우스</p>
            </div>
          </div>
          <div className={cx("weathermate-item")}>
            <span className={cx("weathermate-item__badge")}>T</span>
            <div className={cx("weathermate-item__detail")}>
              <h3 className={cx("title")}>상의</h3>
              <p className={cx("description")}>반팔 티셔츠, 셔츠, 블라우스</p>
            </div>
          </div>
          <div className={cx("weathermate-item")}>
            <span className={cx("weathermate-item__badge")}>T</span>
            <div className={cx("weathermate-item__detail")}>
              <h3 className={cx("title")}>상의</h3>
              <p className={cx("description")}>반팔 티셔츠, 셔츠, 블라우스</p>
            </div>
          </div>
          <div className={cx("weathermate-item")}>
            <span className={cx("weathermate-item__badge")}>T</span>
            <div className={cx("weathermate-item__detail")}>
              <h3 className={cx("title")}>상의</h3>
              <p className={cx("description")}>반팔 티셔츠, 셔츠, 블라우스</p>
            </div>
          </div>
        </div>
        <span className={cx("weathermate-line")} />
        <div className={cx("weathermate-tip")}>
          <h3 className={cx("title")}>Weather Tip</h3>
          <p className={cx("description")}>
            오늘은 미세먼지가 많으니 외출 시 마스크를 꼭 착용하세요!
          </p>
        </div>
      </div>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};
export default WeatherMatePresenter;
