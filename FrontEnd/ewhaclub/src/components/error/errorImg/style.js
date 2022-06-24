import { applyMediaQuery } from "styles/mediaQuery";
import styled from "styled-components";

export const StyledRoot = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;

  ${applyMediaQuery("tablet")} {
    width: 50rem;
  }
  ${applyMediaQuery("mobile")} {
    width: 30rem;
  }
`;
