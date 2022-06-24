import { fonts, colors } from "styles/styleObj";
import styled from "styled-components";
export const ErrorText = styled.p`
  font-size: ${fonts.size.medium};
  font-weight: ${(props) => props.fontWeight};
  padding: 0.5rem 0;
`;
