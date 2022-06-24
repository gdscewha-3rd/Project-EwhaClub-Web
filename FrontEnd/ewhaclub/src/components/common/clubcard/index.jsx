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
import { HeartIcon } from "asset/icons";
import { categories } from "constants/categories";
import { state } from "constants/state";
import { postlike } from "apis/postlike.api";
import { useAuth } from "utils/auth";
import { Link } from "react-router-dom";
const Clubcard = ({ club }) => {
  //console.log(club);
  const { auth } = useAuth();
  const makelike = async () => {
    console.log("좋아요 누르기", club.id);
    if (auth.token) {
      const response = await postlike(auth.token, club.id);
      console.log(response);
    }
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

        <LikesWrap onClick={makelike}>
          <LikesImg src={HeartIcon} />

          {/*<LikesCnt>65</LikesCnt>*/}
        </LikesWrap>
      </SubContainer>
    </StyledRoot>
  );
};
export default Clubcard;
