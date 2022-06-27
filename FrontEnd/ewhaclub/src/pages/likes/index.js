import React, { useEffect, useState } from "react";
import Navbar from "components/navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "asset/icons";
import useAuth from "hooks/useAuth";
import { likes } from "apis/likes.api";
import ClubcardList from "components/common/clubcardList";
import Input from "components/common/input";
import { colors, BORDER_RADIUS_3 } from "styles/styleObj";
import Button from "components/common/duplicateCheckBtn";
import Loading from "components/common/loading";

const Likes = () => {
  const { likes } = useAuth();
  console.log(likes);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setData(likes);
    setloading(false);
  }, [likes]);
  return (
    <>
      {/* <Navbar />*/}

      <StyledRoot>
        <Link to={`/`}>
          <img src={LogoIcon} alt="logo" />
        </Link>

        <Input
          value={`나의 좋아요 목록`}
          borderRadius={BORDER_RADIUS_3}
          borderColor={colors.green.ewha}
          color={colors.green.ewha}
          size="medium"
          disabled
        />
        {loading && <Loading />}

        {!loading && data && <ClubcardList data={data} />}

        <Link to={`/`}>
          <Button
            title="Main"
            fontColor={colors.black}
            backgroundColor={colors.yellow.origin}
            size="large"
          />
        </Link>
      </StyledRoot>
    </>
  );
};

export default Likes;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem;
`;
