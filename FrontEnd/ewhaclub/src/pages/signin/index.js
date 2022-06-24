import React, { useEffect, useState, useRef } from "react";
import { LogoIcon } from "asset/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useInput from "hooks/useInput";
import Input from "components/common/input";
import { BORDER_RADIUS_1, colors, fonts } from "styles/styleObj";
import Button from "components/common/button";
import { IsEwha } from "utils/validation";
import ErrorDescritption from "components/error/errorDescription";
import { SignIn } from "apis/signin.api";
import { useHistory } from "react-router-dom";
import { useAuth } from "utils/auth";
import Likes from "pages/likes";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const didMountRef = useRef();
  const [error, setError] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(true);
  const { auth, login } = useAuth();

  const checkError = () => {
    let _errorEmail = "";
    let _errorPwd = "";
    if (!email.value) {
      _errorEmail = "이메일을 입력하세요!!";
    } else if (!password.value) {
      _errorPwd = "비밀번호를 입력하세요!!";
    } else if (!IsEwha(email.value)) {
      _errorEmail = "이화인 이메일을 입력하세요!!";
    }
    setError({ email: _errorEmail, password: _errorPwd });
  };

  const _handleLoginBtn = async () => {
    console.log(disabled);
    try {
      //로딩 시작
      const form = {
        email: email.value,
        password: password.value,
      };
      const response = await SignIn(form);
      if (response) {
        console.log("토큰 발급", response);
        login(response, form.email.split("@")[0]);
      } else {
        throw Error("존재하지 않는 계정입니다!!");
      }
    } catch (e) {
      //console.log(e);
      alert(e);
    } finally {
      //로딩 끝내기
    }
  };

  useEffect(() => {
    if (didMountRef.current) {
      checkError();
      //console.log(error);
    } else {
      didMountRef.current = true;
    }
  }, [email.value, password.value]);

  useEffect(() => {
    setDisabled(
      !(email.value && password.value && !error.email && !error.password)
    );
  }, [email.value, password.value, error.email, error.password]);

  return (
    <StyledRoot>
      <Link to={`/`}>
        <img src={LogoIcon} alt="logo" />
      </Link>
      <Input
        type="text"
        id="email"
        placeholder="ewhaclub@ewhain.net"
        borderRadius={BORDER_RADIUS_1}
        borderColor={colors.green.ewha}
        size="medium"
        {...email}
      />
      {error.email ? <ErrorDescritption text={error.email} /> : null}
      <Input
        type="text"
        id="password"
        placeholder="ewhaclub"
        borderRadius={BORDER_RADIUS_1}
        borderColor={colors.green.ewha}
        color={colors.green.ewha}
        size="medium"
        {...password}
      />
      {error.password ? <ErrorDescritption text={error.password} /> : null}
      <Button
        title="로그인"
        fontColor={colors.black.light_grey_3}
        fontSize={fonts.size.regular}
        backgroundColor={colors.yellow.origin}
        size="medium"
        onClick={_handleLoginBtn}
        disabled={disabled}
      />
      <Link to={`/signup`}>
        <Button
          title="회원가입"
          fontColor={colors.white.origin}
          fontSize={fonts.size.regular}
          backgroundColor={colors.green.ewha}
          size="medium"
        />
      </Link>

      <Button
        title="중복확인"
        fontColor={colors.black.light_grey_3}
        fontSize={fonts.size.regular}
        backgroundColor={colors.yellow.origin}
        size="small"
      />
    </StyledRoot>
  );
};

export default Login;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.8rem 0;
`;
