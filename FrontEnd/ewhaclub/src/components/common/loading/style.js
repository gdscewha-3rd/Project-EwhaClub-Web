import styled, { keyframes } from "styled-components";
import { colors } from "styles/styleObj";

const rotatebox = keyframes`
 0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Acorn = styled.img`
  width: 30rem;
  height: 30rem;
  animation-name: ${rotatebox};
  animation-duration: 1s;
  animation-timing-function: ease; //linear
  animation-iteration-count: infinite;
`;

export const StyledRoot = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(233, 232, 232, 0.5);

  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
