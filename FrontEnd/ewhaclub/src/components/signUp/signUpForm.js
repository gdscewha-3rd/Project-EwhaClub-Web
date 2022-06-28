import Input from "components/common/input";
import useInput from "hooks/useInput";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BORDER_RADIUS_1, colors, fonts } from "styles/styleObj";
import { postCheckEmail, postCheckNickName, postSignUp } from "apis/signup.api";
import DuplicateCheckBtn from "components/common/duplicateCheckBtn";
import { Link, useNavigate } from "react-router-dom";
import { IsEwha } from "utils/validation";
import AuthError from "components/error/auth";

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
    console.log(errorNickName);
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
    const form = {
      email: email.value,
      password: password.value,
      nickname: nickName.value,
    };
    const response = await postSignUp(form);
    if (response === "sign-up success") {
      navigate("/login");
    } else alert("회원가입 오류 발생");
  };

  useEffect(() => {
    setDisabled(
      !(
        nickNameDisabled &&
        emailDisabled &&
        email.value &&
        password.value &&
        nickName.value
      )
    );
  }, [
    email.value,
    password.value,
    nickName.value,
    nickNameDisabled,
    emailDisabled,
  ]);
  return (
    <StFormSection>
      <StFormContainer>
        <StInputWrapper>
          <span>닉네임</span>
          <div>
            <Input
              type="text"
              placeholder="닉네임을 입력해주세요"
              borderRadius={BORDER_RADIUS_1}
              borderColor={colors.green.ewha}
              size="medium"
              disabled={nickNameDisabled}
              {...nickName}
            />
            {errorNickName ? (
              <AuthError text={errorNickName}></AuthError>
            ) : null}
          </div>

          <DuplicateCheckBtn
            title="중복확인"
            fontColor={colors.black.light_grey_3}
            fontSize={fonts.size.regular}
            backgroundColor={colors.yellow.origin}
            onClick={handleNickName}
            size="small"
          />
        </StInputWrapper>

        <StInputWrapper>
          <span>이메일</span>

          <div>
            <Input
              type="email"
              placeholder="ewhaclub@ewhain.net"
              borderRadius={BORDER_RADIUS_1}
              borderColor={colors.green.ewha}
              size="medium"
              disabled={emailDisabled}
              {...email}
            />
            {errorEmail ? <AuthError text={errorEmail}></AuthError> : null}
          </div>

          <DuplicateCheckBtn
            title="중복확인"
            fontColor={colors.black.light_grey_3}
            fontSize={fonts.size.regular}
            backgroundColor={colors.yellow.origin}
            onClick={handleEmail}
            size="small"
          />
        </StInputWrapper>

        <StInputWrapper>
          <span>비밀번호</span>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            borderRadius={BORDER_RADIUS_1}
            borderColor={colors.green.ewha}
            size="medium"
            {...password}
          />
        </StInputWrapper>
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
      <Link to={`/login`}>
        <DuplicateCheckBtn
          title="로그인"
          fontColor={colors.black.light_grey_3}
          fontSize={fonts.size.regular}
          backgroundColor={colors.yellow.origin}
          size="medium"
        />
      </Link>
    </StFormSection>
  );
}

const StFormSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

const StFormContainer = styled.div``;

const StInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  span {
    width: 5.8rem;
    color: ${colors.green.ewha};
    font-weight: ${fonts.weight.bold};
    font-size: ${fonts.size.regular};
    margin-right: 3.4rem;
  }
`;
