import React, { useEffect, useState } from "react";
import { LogoIcon } from "asset/icons";
import styled from "styled-components";
import SearchInput from "components/searchinput";
import { Link } from "react-router-dom";
import dummy from "db/data.json";
import Clubcard from "components/clubcard";
import CategoryMenu from "components/category";
import { applyMediaQuery } from "styles/mediaQuery";
import ClubcardList from "components/clubcardList";

const Main = ({ match }) => {
  console.log("match", match);
  const category = match.params.category || "clubs";
  //일단 카데고리 모두 선택은 ""로 해둠
  //console.log(category);

  return (
    <StyledRoot>
      <Link to={`/`}>
        <img src={LogoIcon} alt="logo"></img>
      </Link>
      <SearchInput />
      <CategoryMenu />
      <ClubcardList category={category} />
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem;
`;
