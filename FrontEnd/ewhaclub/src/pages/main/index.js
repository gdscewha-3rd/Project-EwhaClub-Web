import React, { useState } from "react";
import logo from "public/asset/icons/logo.png";
import styled from "styled-components";
import SearchInput from "components/searchinput";
const Main = () => {
  return (
    <Section>
      <img src={logo} alt="logo"></img>
      <SearchInput />
    </Section>
  );
};

export default Main;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 128px;
`;
