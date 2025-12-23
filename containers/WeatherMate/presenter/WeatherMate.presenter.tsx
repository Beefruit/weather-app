"use client";

import { type FC } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/modal/Modal";
import classNames from "classnames/bind";
import styles from "./WeatherMate.module.css";
import { IOutfitData } from "../types";
import { formatTypeToInitial, formatTypeToKorean } from "../domain";
import LoadingPresenter from "./Loading.presenter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./WeatherMateSwiper.css";

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
          <div className={cx("weathermate-header")}>
            <button className="swiper-prev" />
            <h2 className={cx("weathermate-title")}>Weather Mate</h2>
            <button className="swiper-next" />
          </div>

          <div className="progressbar"></div>
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".progressbar",
            }}
            spaceBetween={16}
            slidesPerView={1}
            className={cx("weathermate-swiper")}
          >
            {outfitList.map((outfit, index) => (
              <SwiperSlide key={index}>
                <div className={cx("weathermate-container")}>
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
