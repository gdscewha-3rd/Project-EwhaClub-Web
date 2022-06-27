import Input from "components/common/input";
import useInput from "hooks/useInput";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BORDER_RADIUS_1, colors, fonts } from "styles/styleObj";
import { postCheckEmail, postCheckNickName, postSignUp } from "apis/signup.api";
import DuplicateCheckBtn from "components/common/duplicateCheckBtn";
import { useNavigate } from "react-router-dom";
import { IsEwha } from "utils/validation";

export default function SignUpForm() {
    const nickName = useInput();
    const email = useInput();
    const password = useInput();
    const [errorNickName, setErrorNickName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [nickNameDisabled, setNickNameDisabled] = useState(false);
    const [emailDisabled, setEmailDisabled] = useState(false);

    const handleNickName = async () => {
        const form = { checkName: nickName.value };
        const response = await postCheckNickName(form);
        if (response === "not existed nickname") {
            setErrorNickName("사용가능한 닉네임입니다");
            setNickNameDisabled(true);
        } else if (response === "already existed nickname") {
            setErrorNickName("이미 사용중인 닉네임입니다");
        }
    };

    const handleEmail = async () => {
        const form = { checkEmail: email.value };
        const response = await postCheckEmail(form);
        if (!IsEwha(email.value)) {
            setErrorEmail("이화인 메일만 사용가능합니다");
        } else if (IsEwha(email.value)) {
            if (response === "already existed email") {
                setErrorEmail("이미 사용중인 이메일입니다");
            } else if (response === "not existed email") {
                setErrorEmail("사용가능한 이메일입니다");
                setEmailDisabled(true);
            }
        }
    };

    const signUp = async () => {
        const form = { email: email.value, password: password.value, nickname: nickName.value };
        const response = await postSignUp(form);
        if (response === "sign-up success") {
            navigate("/login");
        } else alert("회원가입 오류 발생");
    };

    useEffect(() => {
        setDisabled(
            !(nickNameDisabled && emailDisabled && email.value && password.value && nickName.value)
        );
    }, [email.value, password.value, nickName.value, nickNameDisabled, emailDisabled]);
    return (
        <StFormSection>
            <StFormContainer>
                <NickNameWrapper>
                    <p>닉네임</p>
                    <Input
                        type="text"
                        id="nickName"
                        placeholder="닉네임을 입력해주세요"
                        borderRadius={BORDER_RADIUS_1}
                        borderColor={colors.green.ewha}
                        size="medium"
                        disabled={nickNameDisabled}
                        {...nickName}
                    />
                    {errorNickName && <p>{errorNickName}</p>}
                    <DuplicateCheckBtn
                        title="중복확인"
                        fontColor={colors.black.light_grey_3}
                        fontSize={fonts.size.regular}
                        backgroundColor={colors.yellow.origin}
                        onClick={handleNickName}
                        size="small"
                    />
                </NickNameWrapper>
                <EmailWrapper>
                    <p>이메일</p>
                    <Input
                        type="email"
                        id="email"
                        placeholder="ewhaclub@ewhain.net"
                        borderRadius={BORDER_RADIUS_1}
                        borderColor={colors.green.ewha}
                        size="medium"
                        disabled={emailDisabled}
                        {...email}
                    />
                    {errorEmail && <p>{errorEmail}</p>}
                    <DuplicateCheckBtn
                        title="중복확인"
                        fontColor={colors.black.light_grey_3}
                        fontSize={fonts.size.regular}
                        backgroundColor={colors.yellow.origin}
                        onClick={handleEmail}
                        size="small"
                    />
                </EmailWrapper>
                <PasswordWrapper>
                    <p>비밀번호</p>
                    <Input
                        type="password"
                        id="password"
                        placeholder="비밀번호를 입력해주세요"
                        borderRadius={BORDER_RADIUS_1}
                        borderColor={colors.green.ewha}
                        size="medium"
                        {...password}
                    />
                </PasswordWrapper>
            </StFormContainer>

            <DuplicateCheckBtn
                title="회원가입"
                fontColor={colors.white.origin}
                fontSize={fonts.size.regular}
                backgroundColor={colors.green.ewha}
                size="medium"
                onClick={signUp}
                disabled={disabled}
            />
        </StFormSection>
    );
}

const StFormSection = styled.main``;

const StFormContainer = styled.div``;

const NickNameWrapper = styled.div`
    display: flex;
`;

const EmailWrapper = styled.div`
    display: flex;
`;

const PasswordWrapper = styled.div`
    display: flex;
`;
