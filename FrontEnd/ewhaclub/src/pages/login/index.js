import React from "react";
import { LogoIcon } from "asset/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useInput from "hooks/useInput";
import Input from "components/common/input";
import { BORDER_RADIUS_1, colors, fonts } from "styles/styleObj";
import Button from "components/common/button";
const Login = () => {
  const email = useInput();
  const password = useInput();

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
      <Button
        title="로그인"
        fontColor={colors.black.light_grey_3}
        fontSize={fonts.size.regular}
        backgroundColor={colors.yellow.origin}
        size="medium"
      />
      <Button
        title="회원가입"
        fontColor={colors.white.origin}
        fontSize={fonts.size.regular}
        backgroundColor={colors.green.ewha}
        size="medium"
      />
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
