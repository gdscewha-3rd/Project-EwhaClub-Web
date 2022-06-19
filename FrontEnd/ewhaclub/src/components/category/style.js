import styled from "styled-components";
import { colors, fonts } from "styles/styleObj";

export const StyledRoot = styled.div`
  width: 56rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 7rem;
  column-gap: 7rem;
  padding: 3rem 0;
`;

export const Btn = styled.button`
  width: 8rem;
  height: 8rem;
  line-height: 7rem;
  border-radius: 50%;

  background-color: ${(props) => props.background};
  text-align: center;
  color: ${(props) => props.color};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.small};
  border: 0px solid;
`;
