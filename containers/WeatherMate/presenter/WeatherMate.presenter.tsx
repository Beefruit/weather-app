"use client";

import { type FC } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/modal/Modal";
import classNames from "classnames/bind";
import styles from "./WeatherMate.module.css";
import ProgressbarPresenter from "./PrograssBar.presenter";
import { IOutfitData } from "../types";
import { formatTypeToInitial, formatTypeToKorean } from "../domain";
import LoadingPresenter from "./Loading.presenter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cx = classNames.bind(styles);

interface IWeatherMatePresenterProps {
  isOpen: boolean;
  onCloseBtn: () => void;
  outfitList: IOutfitData[];
  isLoading: boolean;
  isWeatherLoading: boolean;
  hasWeatherData: boolean;
}

const WeatherMatePresenter: FC<IWeatherMatePresenterProps> = ({
  isOpen,
  onCloseBtn,
  outfitList,
  isLoading,
  isWeatherLoading,
  hasWeatherData,
}) => {
  if (!isOpen) return null;

  const shouldShowLoading = isLoading || isWeatherLoading || !hasWeatherData;

  return createPortal(
    <Modal onCloseBtn={onCloseBtn}>
      {shouldShowLoading ? (
        <LoadingPresenter />
      ) : (
        <>
          <ProgressbarPresenter />

          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            className={cx("weathermate-swiper")}
          >
            {outfitList.map((outfit, index) => (
              <SwiperSlide key={index}>
                <div className={cx("weathermate-container")}>
                  <div className={cx("weathermate-header")}>
                    <div className={cx("swiper-controls")}>
                      <button className={cx("swiper-prev")} />
                      <h2 className={cx("weathermate-title")}>Weather Mate</h2>
                      <button className={cx("swiper-next")} />
                    </div>
                  </div>
                  <div className={cx("weathermate-items")}>
                    {outfit.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={cx("weathermate-item")}>
                        <span className={cx("weathermate-item__badge")}>
                          {formatTypeToInitial(item.type)}
                        </span>
                        <div className={cx("weathermate-item__detail")}>
                          <h3 className={cx("title")}>
                            {formatTypeToKorean(item.type)}
                          </h3>
                          <p className={cx("description")}>{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <span className={cx("weathermate-line")} />

                  <div className={cx("weathermate-tip")}>
                    <h3 className={cx("title")}>Weather Tip</h3>
                    {outfit.tips.map((tip, tipIndex) => (
                      <p key={tipIndex} className={cx("description")}>
                        {tip}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};

export default WeatherMatePresenter;
