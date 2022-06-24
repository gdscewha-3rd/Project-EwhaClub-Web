import { fonts, colors } from "styles/styleObj";
import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
export const ErrorText = styled.p`
  font-size: ${fonts.size.medium};
  font-weight: ${(props) => props.fontWeight};
  padding: 0.5rem 0;
  ${applyMediaQuery("mobile")} {
    padding: 0.5rem;
    font-size: ${fonts.size.regular};
    width: fit-content;
  }
`;
