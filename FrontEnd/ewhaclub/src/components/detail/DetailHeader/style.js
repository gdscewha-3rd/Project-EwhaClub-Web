import styled from "styled-components";
import { fonts } from "styles/styleObj";

export const StyledRoot = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const LeftSection = styled.section`
  padding-right: 6rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  h1 {
    font-size: 4rem;
    font-weight: ${fonts.weight.bold};
  }
`;

export const Sns = styled.div`
  display: flex;
  align-items: center;
`;

export const ShortDesc = styled.p``;

export const TagsWrapper = styled.div``;

export const Category = styled.span``;

export const State = styled.span``;

export const RightSection = styled.section``;

export const ImgWrapper = styled.div`
  img {
    width: 51.2rem;
    height: 28.8rem;
  }
`;

export const Hits = styled.span``;
