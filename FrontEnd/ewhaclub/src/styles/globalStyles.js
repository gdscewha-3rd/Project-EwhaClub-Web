// 전역적인 스타일 설정
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    background-color: #D0FFD8;
  }
  * {
  /* font-family: MinSans-Medium; */
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
      border-radius: 18px;
    }
  }
  a{
    margin:0;
    padding:0;
  }
  button:hover {
    cursor: pointer;
  }
  img{
    background-color: transparent;
  }
`;

export default GlobalStyle;
