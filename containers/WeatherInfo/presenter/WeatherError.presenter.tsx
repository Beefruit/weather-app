import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./WeatherError.module.css";
import { CloudOff } from "lucide-react";

const cx = classNames.bind(styles);

const WeatherErrorPresenter: FC = () => {
  return (
    <div className={cx("home-error")}>
      <CloudOff size={64} className={cx("error-icon")} />
      <h2 className={cx("error-title")}>앗! 문제가 발생했습니다.</h2>
      <p className={cx("error-description")}>
        도시를 찾을 수 없습니다.
        <br />
        런던, 파리, 도쿄, 뉴욕, 모스크바, 서울, 부산을 검색해보세요!
      </p>
    </div>
  );
};

export default WeatherErrorPresenter;
