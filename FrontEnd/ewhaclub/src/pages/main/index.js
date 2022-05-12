import React, { useEffect, useState } from "react";

import { LogoIcon } from "asset/icons";

import styled from "styled-components";
import SearchInput from "components/searchinput";
import { Link } from "react-router-dom";
import dummy from "db/data.json";
import Clubcard from "components/clubcard";
import CategoryMenu from "components/category";

const Main = () => {
  const [data, setData] = useState([]);

  const getCategoryData = async () => {
    //const dataArray = await getResultArr(name);
    //setData(dataArray);
    setData(dummy.data);
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <StyledRoot>
      <Link to={`/`}>
        <img src={LogoIcon} alt="logo"></img>
      </Link>
      <SearchInput />
      <CategoryMenu />
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
  );
};

export default Main;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 6.4rem;
  column-gap: 4.5rem;
`;
