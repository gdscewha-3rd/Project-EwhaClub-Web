import { LogoIcon } from "asset/icons";
import SignUpForm from "components/signUp/signUpForm";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
    return (
        <StyledRoot>
            <img src={LogoIcon} alt="logo" />
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
    padding: 12.8rem 0;
`;
