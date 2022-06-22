import { LogoIcon } from "asset/icons";
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

const StyledRoot = styled.div``;
