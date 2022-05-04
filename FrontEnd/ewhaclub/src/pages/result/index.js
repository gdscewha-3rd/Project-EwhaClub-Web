import React from "react";
import styled from "styled-components";
import Clubcard from "components/clubcard/index";
import dummy from "../../db/data.json";

const Result = () => {
  return (
    <>
      <div> Result 페이지</div>
      <List>
        {dummy.data.map((club) => (
          <>{<Clubcard club={club} />}</>
        ))}
      </List>
    </>
  );
};

export default Result;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  row-gap: 15px;
  column-gap: 15px;
`;
