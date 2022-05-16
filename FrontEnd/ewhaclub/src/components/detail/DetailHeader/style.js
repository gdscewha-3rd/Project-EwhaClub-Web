import styled from "styled-components";
import { colors, fonts } from "styles/styleObj";

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
  gap: 0.4rem;
`;

export const ShortDesc = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.8rem;
`;

export const TagsWrapper = styled.div`
  font-weight: ${fonts.weight.light};
  font-size: 1.4rem;
  color: ${colors.black.grey};
  font-weight: ${fonts.weight.light};
`;

export const Category = styled.span`
  border-radius: 20px;
  padding: 0.3rem 1.2rem;
  margin-right: 1.5rem;
  background-color: ${(props) => props.color};
`;

export const State = styled.span`
  border-radius: 20px;
  padding: 0.3rem 1.2rem;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
`;

export const RightSection = styled.section`
  padding-left: auto;
  div {
    display: flex;
    align-items: center;
    gap: 1.3rem;
    float: right;
  }
`;

export const ImgWrapper = styled.div`
  margin-bottom: 2.3rem;
  img {
    width: 51.2rem;
    height: 28.8rem;
  }
`;

export const Hits = styled.span`
  font-size: 1.5rem;
`;
