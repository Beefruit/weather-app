import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./page.module.css";
import SearchBarContainer from "@/containers/SearchBar/SearchBar.container";
import WeatherInfoContainer from "@/containers/WeatherInfo/WeatherInfo.container";
import WeatherMateBtnsContainer from "@/containers/WeatherMateBtns/WeatherMateBtns.container";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx("main")}>
      <div className={cx("header")}>
        <h1 className={cx("title")}>날씨 앱</h1>
        <p className={cx("description")}>
          어떤 도시든 현재 날씨 정보를 확인하세요.
        </p>
      </div>
      <SearchBarContainer />
      <div className={cx("home-main")}>
        <WeatherInfoContainer />
        <WeatherMateBtnsContainer />
      </div>
    </div>
  );
}
