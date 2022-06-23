import { LogoIcon } from "asset/icons";
import SignUpForm from "components/signUp/signUpForm";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
    return (
        <StyledRoot>
            <img src={LogoIcon} alt="logo" />
            <StForm onSubmit={handleSubmit(submitForm)}>
                <SignUpForm />
            </StForm>
        </StyledRoot>
    );
}

export default SignUp;

const StyledRoot = styled.div``;
