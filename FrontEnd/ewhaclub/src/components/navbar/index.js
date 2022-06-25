import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "utils/auth";
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.8rem;
`;
