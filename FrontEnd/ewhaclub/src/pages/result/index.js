import React from "react";
import styled from "styled-components";
import Clubcard from "components/clubcard/index";
import SearchInput from "components/searchinput";
import logo from "asset/logo.png";
import dummy from "db/data.json";
import { fonts } from "styles/styleObj";

const Result = () => {
  return (
    <>
      <ResultContainer>
        <img src={logo} alt="logo"></img>

        <SearchInput />
        <SearchInfo>
          <p>검색결과</p>
        </SearchInfo>

        <List>
          {dummy.data.map((club, idx) => (
            <>{<Clubcard key={idx} club={club} />}</>
          ))}
        </List>
      </ResultContainer>
    </>
  );
};

export default Result;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 128px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  row-gap: 15px;
  column-gap: 15px;
`;

const SearchInfo = styled.div`
  font-weight: ${fonts.weight.regular};
`;
