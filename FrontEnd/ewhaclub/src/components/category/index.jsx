import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import { colors ,fonts} from 'styles/styleObj';
const categoryArray = [
    { name: "모두", id: 0 },
    { name: "공연", id: 1 },
    { name: "문화", id: 2 },
    { name: "사회과학", id: 3 },
    { name: "사회연대", id: 4 },
    { name: "종교", id: 5 },
    { name: "체육", id: 6 },
    { name: "학술", id: 7 },
  ];
const CategoryMenu=({getCategoryId})=>{

  const [btnselect, setBtnSelect]=useState([
     true,
    false,
     false,
     false,
     false,
     false,
     false,
     false,
    
  ]);



  

  const catgoryBtnClick=({target})=>{
    
    const {name,value}=target;
    const selectArray = [...Array(btnselect.length)].map((_, i) =>
      {if (i===parseInt(value)) return true; else return false;});
    console.log(selectArray);
    setBtnSelect(selectArray);
    getCategoryId(value);
    
 
   
  }

    return (    <StyledRoot>
    
    {categoryArray.map((club) => (
        <>
          <Btn background={btnselect[club.id] ? `${colors.green.ewha}`: `${colors.white.origin}`} color={btnselect[club.id] ? `${colors.white.origin}` : `${colors.black.light_grey_3}`} name={club.name} value={club.id} onClick={catgoryBtnClick}>{club.name}</Btn>
        </>
      ))}
    
    </StyledRoot>  )
}
export default CategoryMenu;


const StyledRoot=styled.div`
width: 56rem;
display:grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 7rem;
column-gap: 7rem;
padding: 30px 0;

`;

const Btn=styled.button`
  width:8rem;
  height: 8rem;
  line-height: 7rem;
  border-radius: 50%;

 background-color:  ${(props) => props.background};
  text-align: center;
  color:${(props) => props.color};
  font-weight:${fonts.weight.bold};
  font-size:${fonts.size.small};
  border: 0px solid;

`;