"use client";

import { type FC } from "react";

import classNames from "classnames/bind";
import styles from "./PrograssBar.module.css";

const cx = classNames.bind(styles);

const ProgressbarPresenter: FC = () => {
  return (
    <div className={cx("progressbar")}>
      <span className={cx("progress", "step1")} />
      <span className={cx("progress", "step2")} />
      <span className={cx("progress", "step3")} />
      <span className={cx("progress", "step4")} />
      <span className={cx("progress", "step5")} />
    </div>
  );
};

export default ProgressbarPresenter;
