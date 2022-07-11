import { StyledRoot } from "./style";

const AuthError = ({ text }) => {
  return (
    <>
      {" "}
      <StyledRoot>{text}</StyledRoot>
    </>
  );
};

export default AuthError;
