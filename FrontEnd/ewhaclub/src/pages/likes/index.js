import React, { useEffect, useState } from "react";
import Navbar from "components/navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "asset/icons";
import { useAuth } from "utils/auth";
import { likes } from "apis/likes.api";
import ClubcardList from "components/common/clubcardList";
import Input from "components/common/input";
import { colors, BORDER_RADIUS_3 } from "styles/styleObj";
import Button from "components/common/button";
import { useLikes } from "utils/requiredAuth";
const Likes = ({ match, likesArr }) => {
  console.log("Likes", match.path.replace("/", ""), likesArr);
  const { auth } = useAuth();

  const [data, setData] = useState([]);

  /*
  const getLikes = async () => {
    const { data } = await likes(auth.token);
    setData(data);
    //console.log(data);
  };*/

  useEffect(() => {
    setData(likesArr);
  }, []);
  return (
    <>
      <Navbar />
      <StyledRoot>
        <Link to={`/`}>
          <img src={LogoIcon} alt="logo" />
        </Link>

        <Input
          value={`${auth.name}님의 좋아요 목록`}
          borderRadius={BORDER_RADIUS_3}
          borderColor={colors.green.ewha}
          color={colors.green.ewha}
          size="medium"
          disabled
        />

        {data && <ClubcardList data={data} />}

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
