import styled, { css } from "styled-components";
import { fonts } from "styles/styleObj";
const Button = ({ title, fontColor, backgroundColor, size }) => {
  return (
    <StyledRoot
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      size={size}
    >
      {title}
    </StyledRoot>
  );
};

export default Button;

const sizeStyles = css`
  height: 4.4rem;
  ${(props) =>
    props.size === "large" &&
    //404 페이지 버튼
    css`
      height: 7.5rem;
      width: 40.1rem;
      margin: 2.2rem 0;
    `}

  ${(props) =>
    props.size === "medium" &&
    //회원가입, 로그인 버튼
    css`
      width: 30.1rem;
      margin: 1.5rem 0;
    `}
      ${(props) =>
    props.size === "small" &&
    //중복확인 버튼
    css`
      width: 10rem;
      margin: 1.5rem 0;
    `}
`;

const StyledRoot = styled.button`
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.bold};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border-radius: 1rem;
  border-style: none;
  ${sizeStyles}
`;
