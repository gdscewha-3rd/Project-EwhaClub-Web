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
  padding-bottom: 15px;
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
  border-top: 1px solid ${colors.black.light_origin};
  padding-top: 10px;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 19px;
`;

export const LikesWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-family: MinSans-Medium;
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
  color: ${colors.black.origin};
  padding-bottom: 12px;
  //line-height: 21px;
`;

export const Description = styled.div`
  font-family: MinSans-Medium;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  color: ${colors.black.origin};
  //line-height: 19px;
`;

export const Category = styled.span`
  font-family: MinSans-Light;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.light};
  color: ${colors.black.origin};
  background-color: ${(props) => props.color};

  text-align: center;
  border-radius: ${BORDER_RADIUS_2};
  padding: 3px 6px;
  margin-right: 8px;
`;

export const State = styled.span`
  font-family: MinSans-Light;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  color: ${colors.black.origin};
  background-color: ${colors.black.light_grey_1};
  text-align: center;
  border-radius: ${BORDER_RADIUS_2};
  background-color: ${(props) => props.color.color};
  border: 1px solid ${(props) => props.color.border};
  padding: 3px 6px;
`;

export const LikesImg = styled.img`
  object-fit: none;
  padding-right: 5px;
`;

/*const LikesCnt = styled.p`
  color: ${colors.black.origin};
`;*/
