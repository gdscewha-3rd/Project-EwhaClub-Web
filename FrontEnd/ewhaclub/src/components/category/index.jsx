import React from 'react';
import styled from "styled-components";
import { colors ,fonts} from 'styles/styleObj';
const categoryArray = [
    { name: "모두", id: "" },
    { name: "공연", id: 1 },
    { name: "문화", id: 2 },
    { name: "사회과학", id: 3 },
    { name: "사회연대", id: 4 },
    { name: "종교", id: 5 },
    { name: "체육", id: 6 },
    { name: "학술", id: 7 },
  ];
const CategoryMenu=()=>{
    return (    <StyledRoot>
    
    {categoryArray.map((club) => (
        <>
          <span>{club.name}</span>
        </>
      ))}
    
    </StyledRoot>  )
}
export default CategoryMenu;


const StyledRoot=styled.div`
width: 56rem;
display:grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 8rem;
column-gap: 9.4rem;
span {
    width:7rem;
    height: 7rem;
    border-radius: 50%;
    background-color:${colors.white.origin};
    text-align: center;
    line-height: 7rem;
    color:${colors.black.light_grey_3};
    font-weight:${fonts.weight.medium};
    font-size:${fonts.size.semi_regular};
    line-height: 2.4rem;
}
`;