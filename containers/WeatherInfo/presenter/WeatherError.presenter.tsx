import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherError.module.css";

const cx = classNames.bind(styles);

const WeatherErrorPresenter: FC = () => {
  return (
    <div className={cx("home-error")}>
      <h2 className={cx("error-title")}>앗! 문제가 발생했습니다.</h2>
      <p className={cx("error-description")}>
        "tt" 도시를 찾을 수 없습니다. 런던, 파리, 도 쿄, 뉴욕, 모스크바, 서울,
        부산을 검색해보세요!
      </p>
    </div>
  );
};

export default WeatherErrorPresenter;
