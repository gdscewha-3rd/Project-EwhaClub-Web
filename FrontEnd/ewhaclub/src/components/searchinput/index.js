import React, { useState } from "react";
import searchicon from "asset/search.png";
import style from "styled-components";
import { colors, fonts, BORDER_RADIUS_3 } from "styles/styleObj";

const SearchInput = () => {
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
  };
  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onChange}
          type="text"
          placeholder="벗들이 원하는 동아리가 있나요??"
        />

        <img src={searchicon} alt="searchImg" />
      </SearchForm>
    </>
  );
};

export default SearchInput;

const SearchForm = style.div`     
position: relative;
text-align: center;
margin: 0 auto;
width:60%;

input{
    width:100%;
    border-radius:${BORDER_RADIUS_3};
    border : 1px solid ${colors.green.ewha};
    height:44px;
}
img{
    position: absolute;
    left: 15px;
    top:8px;
    margin: 0;
}

`;
