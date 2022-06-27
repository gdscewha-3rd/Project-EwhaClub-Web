import styled, { keyframes } from "styled-components";

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
