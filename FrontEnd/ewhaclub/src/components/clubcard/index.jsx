import {
    colors,
    fonts,
    BORDER_RADIUS_1,
    BORDER_RADIUS_2,
    BOX_SHADOW,
  } from "styles/styleObj";
import React from "react";

import {StyledRoot,Thumbnail,MainContainer,SubContainer,InfoWrap,LikesWrap,Title,Description,Category,State,LikesImg} from "./style"
import { HeartIcon } from 'asset/icons';
  
  const category_color = {
    1: {name:"공연",color:`${colors.red.light}`},
    2: {name:"문화",color:`${colors.orange.origin}`},
    3: {name:"사회과학",color:`${colors.yellow.light}`},
    4: {name:"사회연대",color:`${colors.green.light}`},
    5:{name:"종교",color:`${colors.blue.light}`},
    6: {name:"체육",color:`${colors.purple.light}`},
    7:{name:"학술",color:`${colors.purple.origin}`},
  };
  
  const state_color = {
    0: {
      color: `${colors.black.light_grey_1}`,
      border: `${colors.black.light_grey_1}`,
    },
    1: {
      color: `${colors.white.origin}`,
      border: `${colors.black.light_grey_1}`,
    },
  };
  
  const Clubcard = ({ club }) => {
    return (
      <StyledRoot>
        <Thumbnail>
          <img src={club.main_img_url} alt={club.name}></img>
        </Thumbnail>
  
        <MainContainer>
          <Title>{club.name}</Title>
  
          <Description>{club.short_description}</Description>
        </MainContainer>
  
        <SubContainer>
          <InfoWrap>
            <Category color={category_color[club.category].color}>
              {category_color[club.category].name}
            </Category>
            <State color={state_color[club.is_recruiting]}>
              {club.is_recruiting ? "모집중" : "모집마감"}
              {/*모집 마감이 0*/}
            </State>
          </InfoWrap>
          <LikesWrap>
            <LikesImg src={HeartIcon} />
      
            {/*<LikesCnt>65</LikesCnt>*/}
          </LikesWrap>
        </SubContainer>
      </StyledRoot>
    );
  };
  export default Clubcard;