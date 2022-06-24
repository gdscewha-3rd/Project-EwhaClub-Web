import styled from "styled-components";
import { colors, fonts, BORDER_RADIUS_3 } from "styles/styleObj";
export const StyledRoot = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid ${colors.white.origin};
  border-radius: ${BORDER_RADIUS_3};
  color: ${colors.green.ewha};
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.regular};
`;
