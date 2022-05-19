import React, { useEffect, useState } from "react";
import { searchIcon } from "asset/icons";
import { useHistory } from "react-router-dom";
import { StyledRoot, SearchForm } from './style';

const SearchInput = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const onChange = (event) => {
    console.log("onChange");

    const {
      target: { value },
    } = event;
    setInput(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit");
    console.log(input);
    history.push(`/search?name=${input}`);
  };

  return (
    <StyledRoot>
      <SearchForm onSubmit={onSubmit}>
        <img src={searchIcon} onClick={onSubmit} alt="searchImg" />
        <input
          value={input}
          onChange={onChange}
          type="text"
          placeholder="벗들이 원하는 동아리가 있나요?"
        />
      </SearchForm>
    </StyledRoot>
  );
};

export default SearchInput;