import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Clubcard from "../components/clubcard/index";
import SearchInput from "../components/searchinput";
import logo from "asset/logo.png";
import dummy from "db/data.json";
import { fonts } from "../styles/styleObj";
import { useLocation } from "react-router-dom";
import QueryString from "qs";
import axios from "axios";
import { Link } from "react-router-dom";

const Result = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  const { name } = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const getclubs = async () => {
    //const data=await axios.get("");
    setData(dummy.data);
  };

  useEffect(() => {
    getclubs();
  }, []);

  return (
    <>
      <Section>
        <Link to="/">
          <img src={logo} alt="logo"></img>
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
              <>{<Clubcard key={idx} club={club} />}</>
            ))}
          </List>
        )}
      </Section>
    </>
  );
};

export default Result;

const Section = styled.div`
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
`;
