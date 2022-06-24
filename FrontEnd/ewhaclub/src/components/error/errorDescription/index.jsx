import { ErrorText } from "./style";

const ErrorDescritption = ({ text, fontWeight }) => {
  return (
    <>
      {" "}
      <ErrorText fontWeight={fontWeight}>{text}</ErrorText>
    </>
  );
};

export default ErrorDescritption;
