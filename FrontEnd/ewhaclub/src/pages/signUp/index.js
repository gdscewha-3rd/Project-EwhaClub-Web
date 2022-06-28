import { LogoIcon } from "asset/icons";
import SignUpForm from "components/signUp/signUpForm";
import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <StyledRoot>
      <Link to={`/`}>
        <img src={LogoIcon} alt="logo" />
      </Link>
      <SignUpForm />
    </StyledRoot>
  );
}

export default SignUp;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
`;
