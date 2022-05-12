import { colors } from "styles/styleObj";
import {
  Category,
  Description,
  Header,
  ImgWrapper,
  Infomation,
  Introduce,
  Line,
  Sns,
  State,
  StyledRoot,
  TagsWrapper,
  Title,
} from "./style";

// import { useLocation } from "react-router-dom";
// import QueryString from "qs";
// import { getClubData } from "apis/detail.api";
import { useEffect, useState } from "react";
import dummy from "db/data1.json";
import { InstaIcon, YoutubeIcon } from "asset/icons";

const category_color = {
  공연: `${colors.red.light}`,
  문화: `${colors.orange.origin}`,
  사회과학: `${colors.yellow.light}`,
  사회연대: `${colors.green.origin}`,
  종교: `${colors.blue.light}`,
  체육: `${colors.purple.light}`,
  학술: `${colors.purple.origin}`,
};
const state_color = {
  0: {
    color: `${colors.black.light_grey_1}`,
    border: `${colors.black.light_grey_1}`,
  },
  1: {
    color: `${colors.white.origin}`,
    border: `${colors.black.light_grey_1}`,
  },
};

const DetailBox = () => {
  const [club, setClub] = useState([]);
  // const location = useLocation();

  // const { id } = QueryString.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });

  const setClubData = async () => {
    // const club = await getClubData(id);
    // setClub(club);
    setClub(dummy.data[0]);
  };

  useEffect(() => {
    setClubData();
  }, []);

  return (
    <StyledRoot>
      <Header>
        <Introduce>
          <Title>
            <h1>{club.name}</h1>
            <Sns>
              <img src={InstaIcon} alt="인스타" />
              <img src={YoutubeIcon} alt="유튜브" />
            </Sns>
          </Title>
          <Description>{club.short_description}</Description>
          <TagsWrapper>
            <Category color={category_color[club.category_name]}>
              {club.category_name}
            </Category>
            <State color={state_color[club.is_recruiting]}>
              {club.is_recruiting ? "모집중" : "모집마감"}
            </State>
          </TagsWrapper>
        </Introduce>
        <ImgWrapper>
          <img src={club.main_img_url} alt={club.name}></img>
        </ImgWrapper>
      </Header>
      <Line />
      <Infomation></Infomation>
    </StyledRoot>
  );
};

export default DetailBox;
