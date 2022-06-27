import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Clubcard from "components/common/clubcard";
import { List } from "./style";

const ClubcardList = ({ data }) => {
  return (
    <List>
      {data.map((club, idx) => (
        <Clubcard club={club} key={idx} />
      ))}
    </List>
  );
};

export default ClubcardList;
