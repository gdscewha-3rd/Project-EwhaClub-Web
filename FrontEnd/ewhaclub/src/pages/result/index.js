import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SearchInput from "components/common/searchinput";
import Error from "components/error";
import styled from "styled-components";
import { LogoIcon } from "asset/icons";
import { fonts } from "styles/styleObj";
import { getSearchData } from "apis/search.api";
import { applyMediaQuery } from "styles/mediaQuery";
import ClubcardList from "components/common/clubcardList";

const Result = ({ match }) => {
  //console.log("search result", match.params.name);
  const query = match.params.name;
  const [data, setData] = useState([]);
  const getSearch = async () => {
    const { data } = await getSearchData(query);
    setData(data);
  };
  useEffect(() => {
    if (query) {
      getSearch();
    }
  }, [query]);

  return (
    <>
      <StyledRoot>
        <Link to="/">
          <img src={LogoIcon} alt="logo"></img>
        </Link>

        {data.length === 0 ? (
          <Error />
        ) : (
          <>
            <SearchInput />
            <SearchInfo>
              <Text weight={`${fonts.weight.bold}`}>'{query}'</Text>
              <Text weight={`${fonts.weight.regular}`}>&nbsp;검색결과 :</Text>
              <Text weight={`${fonts.weight.regular}`}>
                &nbsp;{data.length}개
              </Text>
            </SearchInfo>
            <ClubcardList data={data} />
          </>
        )}
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
