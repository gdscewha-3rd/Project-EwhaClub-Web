import {
  colors,
  fonts,
  BORDER_RADIUS_1,
  BORDER_RADIUS_2,
  BOX_SHADOW,
} from "styles/styleObj";
import React from "react";

import {
  StyledRoot,
  Thumbnail,
  MainContainer,
  SubContainer,
  InfoWrap,
  LikesWrap,
  Title,
  Description,
  Category,
  State,
  LikesImg,
} from "./style";
import { HeartIcon, EmptyHeart } from "asset/icons";
import { categories } from "constants/categories";
import { state } from "constants/state";
import { postlike } from "apis/postlike.api";
import { Link } from "react-router-dom";
import { Islikes } from "utils/islikes";
import { dellike } from "apis/dellike.api";
import useAuth from "hooks/useAuth";

const Clubcard = ({ club }) => {
  const { auth, updateLikes, likes } = useAuth();
  console.log(likes ? "HeartIcon" : "HeartEmptyIcon");

  const makeLike = async () => {
    console.log("좋아요 누르기", club.id);
    const response = await postlike(auth.token, club.id);
    console.log(response);
    updateLikes(auth.token);
  };

  const delLike = async () => {
    console.log("삭제");
    const response = await dellike(auth.token, club.id);
    console.log(response);
    updateLikes(auth.token);
  };
  return (
    <StyledRoot>
      <Thumbnail>
        <img src={club.main_img_url} alt={club.name}></img>
      </Thumbnail>
      <Link to={`/club/${club.id}`}>
        <MainContainer>
          <Title>{club.name}</Title>
          <Description>{club.short_description}</Description>
        </MainContainer>
      </Link>

      <SubContainer>
        <InfoWrap>
          <Category color={categories[club.category].color}>
            {categories[club.category].name}
          </Category>
          <State
            color={state[club.is_recruiting].color}
            fontColor={state[club.is_recruiting].fontColor}
            border={state[club.is_recruiting].border}
          >
            {state[club.is_recruiting].name}
          </State>
        </InfoWrap>

        {auth.token && (
          <LikesWrap onClick={Islikes(club.id) ? delLike : makeLike}>
            <LikesImg src={Islikes(club.id) ? HeartIcon : EmptyHeart} />
          </LikesWrap>
        )}
      </SubContainer>
    </StyledRoot>
  );
};
export default Clubcard;
