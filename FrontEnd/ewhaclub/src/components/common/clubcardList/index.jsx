import React, { useEffect, useState } from "react";
//import dummy from "db/data.json";
import { getAllClub } from "apis/all.api";
import { getCategoryClub } from "apis/category.api";
import { getSearchData } from "apis/search.api";
import { Link } from "react-router-dom";
import Clubcard from "components/common/clubcard";
import { List } from "./style";

const ClubcardList = ({ category, query, setcnt }) => {
    const [data, setData] = useState([]);
    console.log("카테고리 검색 결과", category);
    console.log("쿼리 검색 결과", query);

    const getClubs = async () => {
        const { data } =
            category === "clubs" ? await getAllClub() : await getCategoryClub(category);
        setData(data);
        console.log(data);
    };

    const getSearchArr = async () => {
        const { data } = await getSearchData(query);
        //console.log("검색 결과", query, data);
        setData(data);
        setcnt(data.length);
    };

    useEffect(() => {
        if (category) {
            getClubs();
        }
    }, [category]);

    useEffect(() => {
        if (query) {
            getSearchArr();
        }
    }, [query]);

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
