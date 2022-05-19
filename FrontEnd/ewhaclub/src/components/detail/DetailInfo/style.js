import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
import { colors, fonts } from "styles/styleObj";

export const StyledRoot = styled.div`
  width: 100%;
  background-color: white;
`;

export const SectionTitle = styled.div`
  width: fit-content;
  background-color: ${colors.yellow.origin};
  color: ${colors.green.origin};
  font-weight: ${fonts.weight.bold};
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  font-size: 2.4rem;
  ${applyMediaQuery("mobile")} {
    font-size: 2rem;
  }
`;

export const SectionDesc = styled.div`
  width: fit-content;
  font-weight: ${fonts.weight.light};
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  ${applyMediaQuery("mobile")} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    margin-top: 3.2rem;
  }
`;
