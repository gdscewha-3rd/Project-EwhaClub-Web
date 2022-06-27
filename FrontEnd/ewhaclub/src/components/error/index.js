import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "components/error/errorImg";
import ErrorDescription from "components/error/errorDescription";
import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
import { fonts, colors } from "styles/styleObj";
import Button from "components/common/button";

const Error = () => {
  return (
    <StyledRoot>
      <ErrorImg />
      <ErrorDescription
        text={"요청하신 검색어를 찾을 수 없습니다"}
        fontWeight={fonts.weight.bold}
      />
      <ErrorDescription
        text={"하지만 귀염둥이 뽀미를 만나셨습니다:)"}
        fontWeight={fonts.weight.medium}
      />

      <Link to={`/`}>
        <Button
          title="Main"
          fontColor={colors.black}
          backgroundColor={colors.yellow.origin}
          size="large"
        />
      </Link>
    </StyledRoot>
  );
};

export default Error;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
