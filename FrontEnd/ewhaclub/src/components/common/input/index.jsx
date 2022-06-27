import React from "react";
import { StyledRoot } from "./style";

const Input = ({ value, onChange, type, placeholder, borderRadius, borderColor, color, size }) => {
    return (
        <StyledRoot
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            borderRadius={borderRadius}
            borderColor={borderColor}
            color={color}
            size={size}
        />
    );
};

export default Input;
