import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "hooks/useAuth";
import { fonts, colors } from "styles/styleObj";
import { applyMediaQuery } from "styles/mediaQuery";

const Navbar = () => {
  const { auth, logout } = useAuth();
  //console.log(auth);
  return (
    <StyledRoot>
      {!auth.token && (
        <>
          {" "}
          <Link to={`/login`}>
            {" "}
            <span>로그인</span>
          </Link>
          <Link to={`signup`}>
            <span>회원가입</span>
          </Link>
        </>
      )}
      {auth.token && (
        <>
          <Link to={`/likes`}>
            {" "}
            <span>좋아요</span>
          </Link>
          <span onClick={logout}>로그아웃</span>
        </>
      )}

      <span>문의사항</span>
    </StyledRoot>
  );
};
export default Navbar;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  position: absolute;
  right: 0em;
  top: 0em;
  padding-top: 1.5rem;
  padding-right: 12.8rem;

  span {
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.medium};
    padding: 0 0.5rem;
    color: ${colors.green.ewha};
    cursor: pointer;
    &:hover {
      color: ${colors.green.origin};
    }
  }

  ${applyMediaQuery("mobile")} {
    padding-right: 3rem;
  }
`;
