import { type FC } from "react";

import classNames from "classnames/bind";
import styles from "./Loading.module.css";
import { Comment } from "react-loader-spinner";

const cx = classNames.bind(styles);

const LoadingPresenter: FC = () => {
  return (
    <div className={cx("loading-container")}>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#00a2ce"
      />
      <p className={cx("loading-text")}>Weather Mate 준비 중...</p>
    </div>
  );
};
export default LoadingPresenter;
