import React, { useEffect, useState } from "react";
//import { getResultArr } from "apis/search.api";
import { useLocation } from "react-router-dom";
import QueryString from "qs";
import { Link } from "react-router-dom";
import Clubcard from "components/clubcard";
import SearchInput from "components/searchinput";

import styled from "styled-components";
import { LogoIcon } from "asset/icons";
import { fonts } from "styles/styleObj";
import { List } from "pages/main";

import dummy from "db/data.json";
import { applyMediaQuery } from "styles/mediaQuery";
import ClubcardList from "components/clubcardList";

const Result = ({ match }) => {
  console.log("search result", match.params.name);
  const query = match.params.name;
  const [data, setData] = useState([]);
  const location = useLocation();

  const { name } = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const getSearchData = async () => {
    //const dataArray = await getResultArr(name);
    //setData(dataArray);
    setData(dummy.data);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <>
      <StyledRoot>
        <Link to="/">
          <img src={LogoIcon} alt="logo"></img>
        </Link>

        <SearchInput />
        <SearchInfo>
          <Text weight={`${fonts.weight.bold}`}>'{query}'</Text>
          <Text weight={`${fonts.weight.regular}`}>&nbsp;검색결과 :</Text>
          <Text weight={`${fonts.weight.regular}`}>
            &nbsp;{dummy.data.length}개
          </Text>
        </SearchInfo>
        <ClubcardList query={query} />
      </StyledRoot>
    </>
  );
};

export default Result;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem;
`;

{
  /*const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  row-gap: 64px;
  column-gap: 45px;
`;*/
}

const SearchInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 3.5rem;
  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${fonts.size.medium};
`;
