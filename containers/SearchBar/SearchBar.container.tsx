"use client";

import { type FC } from "react";
import SearchBarPresenter from "./presenter/SearchBar.presenter";
import { useSearchBar } from "./hook/useSearchBar";

const SearchBarContainer: FC = () => {
  const { searchValue, onChangeSearchValue, onSubmitSearch } = useSearchBar();

  return (
    <SearchBarPresenter
      searchValue={searchValue}
      onChangeSearchValue={onChangeSearchValue}
      onSubmitSearch={onSubmitSearch}
    />
  );
};

export default SearchBarContainer;
