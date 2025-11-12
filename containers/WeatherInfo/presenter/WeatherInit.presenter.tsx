import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherInit.module.css";

const cx = classNames.bind(styles);

const WeatherInitPresenter: FC = () => {
  return (
    <div className={cx("home-init")}>
      <h2 className={cx("home-title")}>도시를 검색해서 날씨를 확인하세요.</h2>
      <p className={cx("home-description")}>
        예시: 런던, 파리, 도쿄, 뉴욕, 모스크바, 서울, 부산
      </p>
    </div>
  );
};

export default WeatherInitPresenter;
