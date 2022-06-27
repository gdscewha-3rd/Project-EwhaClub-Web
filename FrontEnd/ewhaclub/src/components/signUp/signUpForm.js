import Input from "components/common/input";
import useInput from "hooks/useInput";
import React from "react";
import styled from "styled-components";
import { BORDER_RADIUS_1, colors } from "styles/styleObj";

export default function SignUpForm() {
    const nickName = useInput();
    const email = useInput();
    const password = useInput();

    const checkEmail = {}

    return (
        <StFormSection>
            <StFormContainer>
            <NickNameWrapper>
                <p>닉네임</p>
                <Input
                    type="text"
                    id="nickName"
                    placeholder="ewhaclub@ewhain.net"
                    borderRadius={BORDER_RADIUS_1}
                    borderColor={colors.green.ewha}
                    size="medium"
                    {...nickName}
                />
                <Button
        title="중복확인"
        fontColor={colors.black.light_grey_3}
        fontSize={fonts.size.regular}
        backgroundColor={colors.yellow.origin}
        onClick={...함수이름}
        size="small"
      />
            </NickNameWrapper>
            <EmailWrapper>
                <Input
                    type="email"
                    id="email"
                    placeholder="ewhaclub@ewhain.net"
                    borderRadius={BORDER_RADIUS_1}
                    borderColor={colors.green.ewha}
                    size="medium"
                    {...email}
                />
                <Button
        title="중복확인"
        fontColor={colors.black.light_grey_3}
        fontSize={fonts.size.regular}
        backgroundColor={colors.yellow.origin}
        onClick={...함수이름}
        size="small"
      />
            </EmailWrapper>
            <PasswordWrapper>
                <Input
                    type="password"
                    id="password"
                    placeholder="ewhaclub@ewhain.net"
                    borderRadius={BORDER_RADIUS_1}
                    borderColor={colors.green.ewha}
                    size="medium"
                    {...password}
                />
            </PasswordWrapper>
            </StFormContainer>
        </StFormSection>
    );
}

const StFormSection = styled.main``;

const NickNameWrapper = styled.div``;

const EmailWrapper = styled.div``;

const PasswordWrapper = styled.div``;
