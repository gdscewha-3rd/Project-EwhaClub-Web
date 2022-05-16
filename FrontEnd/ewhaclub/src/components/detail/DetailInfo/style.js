import styled from "styled-components";
import { colors, fonts } from "styles/styleObj";

export const StyledRoot = styled.div`
  width: 87rem;
  background-color: white;
`;

export const DetailDesc = styled.section``;

export const MainActivity = styled.section`
  width: 87rem;
  display: flex;
  flex-direction: column;
`;

export const Recruitment = styled.section``;

export const Poster = styled.section``;

export const SectionTitle = styled.div`
  width: fit-content;
  background-color: ${colors.yellow.origin};
  color: ${colors.green.origin};
  font-weight: ${fonts.weight.bold};
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  font-size: 2.4rem;
`;

export const SectionDesc = styled.div`
  width: fit-content;
  font-weight: ${fonts.weight.light};
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
