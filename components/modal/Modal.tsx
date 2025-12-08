"use client";

import { type FC } from "react";
import { useModal } from "./hook/useModal";

import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IModalprops {
  children: React.ReactNode;
  onCloseBtn: () => void;
}

const Modal: FC<IModalprops> = ({ children, onCloseBtn }) => {
  return (
    <div className={cx("modal")}>
      <button type="button" className={cx("close-btn")} onClick={onCloseBtn}>
        <span className={cx("close-icon")} />
        <span className={cx("close-icon")} />
      </button>
      <div className={cx("modal-content")}>{children}</div>
    </div>
  );
};

export default Modal;
