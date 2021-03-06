import style from "styled-components";
import { colors, fonts, BORDER_RADIUS_3 } from "styles/styleObj";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = style.div`  
  padding: 5rem 0;
  width:56rem;

  ${applyMediaQuery("tablet")}{
    width:50rem;
  }
  ${applyMediaQuery("mobile")}{
    width:30rem;
  }

`;

export const SearchForm = style.form`     
  display: flex;
  flex-direction:row;
  text-align: center;
  margin: 0 auto;
  width:100%;
  border-radius:${BORDER_RADIUS_3};
  border : 1px solid ${colors.green.ewha};
  padding:5px 10px;
  background-color:${colors.white.origin};
  input{
    margin:0;
    padding:0;
  }
  img{
  object-fit:none;
  }
`;
