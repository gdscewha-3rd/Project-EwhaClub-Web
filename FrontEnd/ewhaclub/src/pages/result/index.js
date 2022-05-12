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

import dummy from "db/data.json";

const Result = () => {
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
          <Text weight={`${fonts.weight.bold}`}>'{name}'</Text>
          <Text weight={`${fonts.weight.regular}`}>&nbsp;검색결과 :</Text>
          <Text weight={`${fonts.weight.regular}`}>
            &nbsp;{dummy.data.length}개
          </Text>
        </SearchInfo>
        {data && (
          <List>
            {data.map((club, idx) => (
              <>
                <Link to={`/club?id=${club.id}`}>
                  {<Clubcard key={idx} club={club} />}
                </Link>
              </>
            ))}
          </List>
        )}
      </StyledRoot>
    </>
  );
};

export default Result;

const StyledRoot = styled.div`
  font-family: "MinSans-Medium";
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
  row-gap: 64px;
  column-gap: 45px;
`;

const SearchInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 35px;
`;

const Text = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${fonts.size.medium};
`;
