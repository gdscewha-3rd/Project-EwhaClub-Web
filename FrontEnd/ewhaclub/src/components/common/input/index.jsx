import React from "react";
import { StyledRoot } from "./style";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <StyledRoot
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
