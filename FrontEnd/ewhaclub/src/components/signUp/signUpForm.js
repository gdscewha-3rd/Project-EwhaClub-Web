import useInput from "hooks/useInput";
import React from "react";
import styled from "styled-components";

export default function SignUpForm() {
    const nickName = useInput();
    const email = useInput();
    const password = useInput();

    return (
        <StFormSection>
            <NickNameInput>
                <label htmlFor="nickName">닉네임</label>
                <input type="text" id="nickName" {...nickName} />
            </NickNameInput>
            <EmailInput>
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" {...email} />
            </EmailInput>
            <PasswordInput>
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" {...password} />
            </PasswordInput>
        </StFormSection>
    );
}

const StFormSection = styled.main``;
