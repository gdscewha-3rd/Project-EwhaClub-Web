import styled from "styled-components";

import {
  colors,
  fonts,
  BORDER_RADIUS_1,
  BORDER_RADIUS_2,
  BOX_SHADOW,
} from "styles/styleObj";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.white.origin};
  background-color: ${colors.white.origin};
  border-radius: ${BORDER_RADIUS_1};
  box-shadow: ${BOX_SHADOW};
  padding: 1.5rem;
  height: 30rem;

  text-decoration: none;
`;

export const Thumbnail = styled.div`
  /*로고 : 512 x 288*/
  width: 100%;
  height: 50%;
  padding-bottom: 1.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 30%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 0.1rem solid ${colors.black.light_origin};
  padding-top: 1rem;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.9rem;
`;

export const LikesWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
  color: ${colors.black.origin};
  padding-bottom: 1.2rem;
  //line-height: 21px;
`;

export const Description = styled.div`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  color: ${colors.black.origin};
  //line-height: 19px;
`;

export const Category = styled.span`
  //font-family: MinSans-Light;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.light};
  color: ${colors.black.origin};
  background-color: ${(props) => props.color};

  text-align: center;
  border-radius: ${BORDER_RADIUS_2};
  border: 0.1rem solid ${(props) => props.color};
  padding: 0.3rem 0.6rem;
  margin-right: 0.8rem;
`;

export const State = styled.span`
  //font-family: MinSans-Light;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  color: ${(props) => props.fontColor};

  text-align: center;
  border-radius: ${BORDER_RADIUS_2};
  background-color: ${(props) => props.color};
  border: 0.1rem solid ${(props) => props.border};
  padding: 0.3rem 0.6rem;
`;

export const LikesImg = styled.img`
  object-fit: none;
  padding-right: 0.5rem;
`;

/*const LikesCnt = styled.p`
  color: ${colors.black.origin};
`;*/
