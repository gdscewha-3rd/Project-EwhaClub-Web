import React, { useEffect, useState } from "react";
import { LogoIcon } from "asset/icons";
import styled from "styled-components";
import SearchInput from "components/searchinput";
import { Link } from "react-router-dom";
import dummy from "db/data.json";
import Clubcard from "components/clubcard";
import CategoryMenu from "components/category";
import { getAllClub } from "apis/all.api";
import { getCategoryClub } from "apis/category.api";

const Main = () => {
  const [data, setData] = useState([]);
  const [selectedId, setselectedId] = useState(0);

  const getCategoryData = async () => {
    //더미데이터
    setData(dummy.data);
  };

  const getCategoryId = (id) => {
    //console.log(id);
    setselectedId(id);
  };

  useEffect(() => {
    console.log(selectedId);
    if (!selectedId) {
      // 모두 보기 클릭한 경우
      // const clubs = await getAllClub();
    } else {
      //특정 카테고리 클릭한 경우
      // const clubs = await getCategoryClub(selectedId);
    }
    // setData(clubs);
    getCategoryData();
  }, [selectedId]);

  return (
    <StyledRoot>
      <Link to={`/`}>
        <img src={LogoIcon} alt="logo"></img>
      </Link>
      <SearchInput />
      <CategoryMenu getCategoryId={getCategoryId} />
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
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 6.4rem;
  column-gap: 4.5rem;
`;
