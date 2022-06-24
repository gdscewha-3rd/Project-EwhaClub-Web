import styled, { css } from "styled-components";
import { fonts } from "styles/styleObj";
import { applyMediaQuery } from "styles/mediaQuery";
const Button = ({
  title,
  fontSize,
  fontColor,
  backgroundColor,
  size,
  disabled,
  onClick,
}) => {
  //console.log(fontSize);
  return (
    <StyledRoot
      fontColor={fontColor}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </StyledRoot>
  );
};

export default Button;

export const sizeStyles = css`
  height: 4.4rem;
  margin: 1.5rem 0;
  padding: 0 1.5rem;
  ${(props) =>
    props.size === "large" &&
    //404 페이지 버튼
    css`
      height: 7.5rem;
      width: 30rem;

      ${applyMediaQuery("mobile")} {
        width: 30rem;
      }
    `}

  ${(props) =>
    props.size === "medium" &&
    //회원가입, 로그인 버튼
    css`
      width: 30rem;
    `}
      ${(props) =>
    props.size === "small" &&
    //중복확인 버튼
    css`
      width: 10rem;
    `}
`;

const StyledRoot = styled.button`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : fonts.size.medium};
  font-weight: ${fonts.weight.bold};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border-radius: 1rem;
  border-style: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  ${sizeStyles}
`;
