import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
import { colors } from "styles/styleObj";

export const StyledRoot = styled.div`
  width: 99rem;
  margin-top: 5rem;
  padding: 5rem 6rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${applyMediaQuery("tablet")} {
    width: 80rem;
  }
`;

export const Line = styled.div`
  width: 95rem;
  height: 0.1rem;
  background-color: ${colors.green.ewha};
  margin-top: 2.6rem;
  margin-bottom: 2.6rem;

  ${applyMediaQuery("tablet")} {
    width: 75rem;
  }
`;
