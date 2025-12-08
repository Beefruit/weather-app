"use client";

import { type FC } from "react";

import classNames from "classnames/bind";
import styles from "./ProgressBar.module.css";

interface IProgressbarPresenterProps {
  step?: number;
}

const cx = classNames.bind(styles);

const ProgressbarPresenter: FC<IProgressbarPresenterProps> = ({ step }) => {
  return (
    <div className={cx("progressbar")}>
      <span className={cx("progress", "step1", step === 1 && "active")} />
      <span className={cx("progress", "step2", step === 2 && "active")} />
      <span className={cx("progress", "step3", step === 3 && "active")} />
      <span className={cx("progress", "step4", step === 4 && "active")} />
    </div>
  );
};

export default ProgressbarPresenter;
