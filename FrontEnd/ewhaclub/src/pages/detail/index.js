import { LogoIcon } from "asset/icons";
import ClubDetail from "components/detail";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

// 선택한 동아리의 data를 어떻게 들고오지?
const Detail = () => {
  return (
    <StyledRoot>

      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <ClubDetail />
    </StyledRoot>
  );
};

export default Detail;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem;
  font-family: "MinSans-Medium";
  ${applyMediaQuery("mobile")} {
    margin-top: -5rem;
  }
`;
