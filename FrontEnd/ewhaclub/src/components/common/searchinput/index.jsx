import React, { useEffect, useState } from "react";
import { searchIcon } from "asset/icons";
import { useHistory } from "react-router-dom";
import { StyledRoot, SearchForm } from "./style";
import Input from "../input";
import useInput from "hooks/useInput";

const SearchInput = () => {
  const history = useHistory();
  const input = useInput();

  const onSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${input.value}`);
  };

  return (
    <StyledRoot>
      <SearchForm onSubmit={onSubmit}>
        <img src={searchIcon} onClick={onSubmit} alt="searchImg" />
        <Input
          type="text"
          id="input"
          placeholder="벗들이 원하는 동아리가 있나요?"
          {...input}
        />
      </SearchForm>
    </StyledRoot>
  );
};

export default SearchInput;
