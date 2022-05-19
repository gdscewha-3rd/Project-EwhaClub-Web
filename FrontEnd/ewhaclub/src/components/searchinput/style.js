import style from "styled-components";
import { colors, fonts, BORDER_RADIUS_3 } from "styles/styleObj";
import { applyMediaQuery } from "styles/mediaQuery";
export const StyledRoot = style.div`  
  padding: 50px 0;
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
  height:44px;
  border-radius:${BORDER_RADIUS_3};
  border : 1px solid ${colors.green.ewha};
  padding:5px 10px;
  background-color:${colors.white.origin};
  input{
  width:100%;
      outline: none;
    border:1px solid ${colors.white.origin};
    border-radius:${BORDER_RADIUS_3};
      color:${colors.green.ewha};
      font-size:${fonts.size.regular};
      font-weight:${fonts.weight.regular};
  }
  img{
  object-fit:none;
  }



`;
