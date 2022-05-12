import { colors } from "styles/styleObj";
import {
  Category,
  ShortDesc,
  Header,
  ImgWrapper,
  Infomation,
  LeftSection,
  Line,
  Sns,
  State,
  StyledRoot,
  TagsWrapper,
  Title,
  RightSection,
  DetailDesc,
  SectionTitle,
  SectionDesc,
  Hits,
  MainActivity,
  Recruitment,
  Poster,
} from "./style";

// import { useLocation } from "react-router-dom";
// import QueryString from "qs";
// import { getClubData } from "apis/detail.api";
import { useEffect, useState } from "react";
import dummy from "db/detailData.json";
import { EmptyHeart, InstaIcon, YoutubeIcon } from "asset/icons";

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
        <LeftSection>
          <Title>
            <h1>{club.name}</h1>
            <Sns>
              <img src={InstaIcon} alt="인스타" />
              <img src={YoutubeIcon} alt="유튜브" />
            </Sns>
          </Title>
          <ShortDesc>{club.short_description}</ShortDesc>
          <TagsWrapper>
            <Category color={category_color[club.category_name]}>
              {club.category_name}
            </Category>
            <State color={state_color[club.is_recruiting]}>
              {club.is_recruiting ? "모집중" : "모집마감"}
            </State>
          </TagsWrapper>
        </LeftSection>
        <RightSection>
          <ImgWrapper>
            <img src={club.main_img_url} alt={club.name}></img>
          </ImgWrapper>
          <div>
            <Hits>조회수 {club.view_cnt}</Hits>
            <img src={EmptyHeart} alt="좋아요" />
          </div>
        </RightSection>
      </Header>
      <Line />
      <Infomation>
        <DetailDesc>
          <SectionTitle>소개</SectionTitle>
          <SectionDesc>{club.detail_description}</SectionDesc>
        </DetailDesc>
        <MainActivity>
          <SectionTitle>주요활동</SectionTitle>
          <SectionDesc>{club.detail_activity}</SectionDesc>
        </MainActivity>
        <Recruitment>
          <SectionTitle>모집</SectionTitle>
          <SectionDesc>
            <div>
              <strong>모집 기한:</strong>
              {club.recruit_start} ~ {club.recruit_end}
            </div>
            <div>
              <strong>모집 요건:</strong>
              {club.recruit_requirement}
            </div>
            <div>
              <strong>지원 방법:</strong>
              {club.how_to_apply}
            </div>
          </SectionDesc>
        </Recruitment>
        <Poster>
          <SectionTitle>포스터</SectionTitle>
          <SectionDesc>{club.poster_img_url}</SectionDesc>
        </Poster>
      </Infomation>
    </StyledRoot>
  );
};

export default DetailBox;
