import React from "react";
import styled from "styled-components";
import { colors, fonts, BORDER_RADIUS, BOX_SHADOW } from "styles/styleObj";
import Clubcard from "components/clubcard/index";

const Title = styled.div`
  font-family: MinSans-Medium;
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  color: ${colors.red.origin};
  width: 500px;
  height: 100px;
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${BOX_SHADOW};
`;

const Result = () => {
  return (
    <>
      <Title> Result 페이지</Title>
      <Clubcard />
    </>
  );
};

export default Result;
