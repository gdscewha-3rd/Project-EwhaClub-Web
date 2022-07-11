import { Line, StyledRoot } from "./style";
import { getClubData } from "apis/detail.api";
import { useEffect, useState } from "react";
import DetailHeader from "./DetailHeader";
import DetailInfo from "./DetailInfo";

const ClubDetail = ({ id }) => {
  // 서버 제대로 연결되면, 초기값 빈 배열로 바꿔놓기!!

  const [club, setClub] = useState(null);

  const setClubData = async () => {
    const { data } = await getClubData(id);
    console.log("디테일", data);
    setClub(data);
  };

  useEffect(() => {
    setClubData();
  }, []);

  return (
    <>
      {
        <StyledRoot>
          {club && <DetailHeader club={club} />}
          <Line />
          {club && <DetailInfo club={club} />}
        </StyledRoot>
      }
    </>
  );
};

export default ClubDetail;
