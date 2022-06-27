import React, { useEffect, useState } from "react";
import { LogoIcon } from "asset/icons";
import styled from "styled-components";
import SearchInput from "components/common/searchinput";
import { Link } from "react-router-dom";
import CategoryMenu from "components/category";
import { useParams } from "react-router-dom";
import ClubcardList from "components/common/clubcardList";
import { getAllClub } from "apis/all.api";
import { getCategoryClub } from "apis/category.api";
import Navbar from "components/navbar";
import Loading from "components/common/loading";

function Main() {
  const params = useParams();
  const category = params.category || "clubs";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      getClubs();
      setLoading(false);
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
        {loading && <Loading />}

        {!loading && data && <ClubcardList data={data} />}
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
