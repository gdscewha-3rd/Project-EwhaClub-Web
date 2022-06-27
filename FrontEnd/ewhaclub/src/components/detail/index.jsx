import { Line, StyledRoot } from "./style";
import { getClubData } from "apis/detail.api";
import { useEffect, useState } from "react";
import dummy from "db/detailData.json";

import DetailHeader from "./DetailHeader";
import DetailInfo from "./DetailInfo";

const ClubDetail = ({ id }) => {
    // 서버 제대로 연결되면, 초기값 빈 배열로 바꿔놓기!!
    const [club, setClub] = useState(dummy.data);

    const setClubData = async () => {
        const club = await getClubData(id);
        setClub(club);
    };

    useEffect(() => {
        setClubData();
    }, []);

    return (
        <>
            {club && (
                <StyledRoot>
                    <DetailHeader club={club[0]} />
                    <Line />
                    <DetailInfo club={club[0]} />
                </StyledRoot>
            )}
        </>
    );
};

export default ClubDetail;
