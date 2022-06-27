import React from "react";
import { StyledRoot } from "components/error/errorImg/style";
import { Bomi } from "asset/icons";

const ErrorImg = () => {
  return (
    <StyledRoot>
      <img src={Bomi} alt="bomi" />
    </StyledRoot>
  );
};

export default ErrorImg;
