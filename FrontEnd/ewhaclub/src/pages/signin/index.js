import React, { useEffect, useState, useRef, useContext } from "react";
import { LogoIcon } from "asset/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import useInput from "hooks/useInput";
import Input from "components/common/input";
import { BORDER_RADIUS_1, colors, fonts } from "styles/styleObj";
import DuplicateCheckBtn from "components/common/duplicateCheckBtn";
import { IsEwha } from "utils/validation";
import { SignIn } from "apis/signin.api";
import { encrypt } from "utils/CryptoJS";
import Loading from "components/common/loading";
import useAuth from "hooks/useAuth";
import AuthError from "components/error/auth";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const didMountRef = useRef();
  const [error, setError] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setAuth, updateLikes } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);
  const from = location.state?.from?.pathname || "/";

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
      setLoading(true);
      const form = {
        email: email.value,
        password: password.value,
      };
      const response = await SignIn(form);
      if (response) {
        const encodedToken = encrypt(response, "token");
        localStorage.setItem("token", encodedToken);
        //console.log("토큰 발급", encrypt(response, "token"));
        setAuth({
          token: response,
        });
        updateLikes(response);
      } else {
        throw Error("존재하지 않는 계정입니다!!");
      }
    } catch (e) {
      //console.log(e);
      alert(e);
    } finally {
      //로딩 끝내기
      setLoading(false);
      console.log("로딩 끝내기", from);
      navigate(from, { replace: true });
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

      {loading && <Loading />}

      {!loading && (
        <LoginForm>
          <div>
            <Input
              type="text"
              id="email"
              placeholder="ewhaclub@ewhain.net"
              borderRadius={BORDER_RADIUS_1}
              borderColor={colors.green.ewha}
              size="medium"
              {...email}
            />
            {error.email ? <AuthError text={error.email} /> : null}
          </div>

          <div>
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
            {error.password ? <AuthError text={error.password} /> : null}
          </div>

          <DuplicateCheckBtn
            title="로그인"
            fontColor={colors.black.light_grey_3}
            fontSize={fonts.size.regular}
            backgroundColor={colors.yellow.origin}
            size="medium"
            onClick={_handleLoginBtn}
            disabled={disabled}
          />
          <Link to={`/signup`}>
            <DuplicateCheckBtn
              title="회원가입"
              fontColor={colors.white.origin}
              fontSize={fonts.size.regular}
              backgroundColor={colors.green.ewha}
              size="medium"
            />
          </Link>
        </LoginForm>
      )}
    </StyledRoot>
  );
};

export default Login;

const StyledRoot = styled.div`
  font-family: MinSans-Medium;
  padding: 12.8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
