import logo from "asset/icons/logo.png";
import ClubDetail from "components/detail";
import styled from "styled-components";

// 선택한 동아리의 data를 어떻게 들고오지?
const Detail = () => {
  return (
    <StyledRoot>
      <img src={logo} alt="logo"></img>
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
`;
