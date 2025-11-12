"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

const cx = classNames.bind(styles);

const SearchBarPresenter: FC = () => {
  return (
    <form className={cx("search-form")}>
      <input
        type="text"
        placeholder="도시 이름을 입력하세요."
        className={cx("search-input")}
      />
      <button type="button" className={cx("search-button")}>
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBarPresenter;
