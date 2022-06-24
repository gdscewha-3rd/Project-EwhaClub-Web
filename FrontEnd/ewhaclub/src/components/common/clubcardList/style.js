import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

export const List = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 6.4rem;
  column-gap: 4.5rem;
  ${applyMediaQuery("tablet")} {
    width: 50rem;
    grid-template-columns: repeat(2, 1fr);
  }
  ${applyMediaQuery("mobile")} {
    width: 30rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
