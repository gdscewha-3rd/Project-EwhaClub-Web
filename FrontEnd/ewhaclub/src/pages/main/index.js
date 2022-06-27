import React, { useEffect, useState } from "react";
import { LogoIcon } from "asset/icons";
import styled from "styled-components";
import SearchInput from "components/common/searchinput";
import { Link } from "react-router-dom";
import CategoryMenu from "components/category";
import ClubcardList from "components/common/clubcardList";
import { getAllClub } from "apis/all.api";
import { getCategoryClub } from "apis/category.api";
import Navbar from "components/navbar";

function Main({ match }) {
  const category = match.params.category || "clubs";

  const [data, setData] = useState([]);

  const getClubs = async () => {
    const { data } =
      category === "clubs"
        ? await getAllClub()
        : await getCategoryClub(category);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    if (category) {
      getClubs();
    }
  }, [category]);

  return (
    <>
      {" "}
      <StyledRoot>
        <Navbar />
        <Link to={`/`}>
          <img src={LogoIcon} alt="logo" />
        </Link>
        <SearchInput />
        <CategoryMenu />

        {data && <ClubcardList data={data} width={100} />}
      </StyledRoot>
    </>
  );
}

export default Main;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 12.8rem;
`;
