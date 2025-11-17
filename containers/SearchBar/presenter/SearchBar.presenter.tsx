"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

const cx = classNames.bind(styles);

interface ISearchBarPresenterProps {
  searchValue: string;
  onChangeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBarPresenter: FC<ISearchBarPresenterProps> = ({
  searchValue,
  onChangeSearchValue,
  onSubmitSearch,
}) => {
  return (
    <form className={cx("search-form")} onSubmit={onSubmitSearch}>
      <input
        type="text"
        placeholder="도시 이름을 입력하세요."
        className={cx("search-input")}
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      <button type="submit" className={cx("search-button")}>
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBarPresenter;
