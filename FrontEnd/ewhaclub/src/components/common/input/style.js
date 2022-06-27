import styled from "styled-components";
import { colors, fonts, BORDER_RADIUS_3 } from "styles/styleObj";
import { applyMediaQuery } from "styles/mediaQuery";
import { sizeStyles } from "../button";
export const StyledRoot = styled.input`
  ${sizeStyles}
  outline: none;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : colors.white.origin)};
  background-color: ${colors.white.origin};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : BORDER_RADIUS_3};
  color: ${colors.green.ewha};
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
`;
