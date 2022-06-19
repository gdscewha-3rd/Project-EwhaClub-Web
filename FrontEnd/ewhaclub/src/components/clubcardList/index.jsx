import React, { useEffect, useState } from "react";
import dummy from "db/data.json";
import { Link } from "react-router-dom";
import Clubcard from "components/clubcard";
import { List } from "./style";

const ClubcardList = ({ category, query }) => {
    const [data, setData] = useState([]);
    console.log("카테고리 검색 결과", category);
    console.log("쿼리 검색 결과", query);
    useEffect(() => {
        setData(dummy.data);
    }, []);

    return (
        <>
            {data && (
                <List>
                    {data.map((club, idx) => (
                        <Link to={`/club/${club.id}`} key={idx}>
                            {<Clubcard club={club} />}
                        </Link>
                    ))}
                </List>
            )}
        </>
    );
};

export default ClubcardList;
