import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Clubcard from "components/common/clubcard";
import { List } from "./style";

const ClubcardList = ({ data }) => {
  return (
    <List>
      {data.map((club, idx) => (
        <Link to={`/club/${club.id}`} key={idx}>
          {<Clubcard club={club} />}
        </Link>
      ))}
    </List>
  );
};

export default ClubcardList;
