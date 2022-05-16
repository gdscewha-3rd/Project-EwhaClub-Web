import {
  Category,
  Hits,
  ImgWrapper,
  LeftSection,
  RightSection,
  ShortDesc,
  Sns,
  State,
  StyledRoot,
  TagsWrapper,
  Title,
} from "./style";
import { EmptyHeart, FaceBookIcon, InstaIcon, YoutubeIcon } from "asset/icons";
import { colors } from "styles/styleObj";

const category_color = {
  1: `${colors.red.light}`,
  2: `${colors.orange.origin}`,
  3: `${colors.yellow.light}`,
  4: `${colors.green.light}`,
  5: `${colors.blue.light}`,
  6: `${colors.purple.light}`,
  7: `${colors.purple.origin}`,
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

const DetailHeader = ({ club }) => {
  const categoryIdProperty = {
    1: "공연",
    2: "문화",
    3: "사회과학",
    4: "사회연대",
    5: "종교",
    6: "체육",
    7: "학술",
  };

  return (
    <StyledRoot>
      <LeftSection>
        <Title>
          <h1>{club.name}</h1>
          <Sns>
            <a href={club.insta_url}>
              <img src={InstaIcon} alt="" />
            </a>
            <a href={club.youtube_url}>
              <img src={YoutubeIcon} alt="" />
            </a>
            <a href={club.facebook_url}>
              <img src={FaceBookIcon} alt="" />
            </a>
          </Sns>
        </Title>
        <ShortDesc>{club.short_description}</ShortDesc>
        <TagsWrapper>
          <Category color={category_color[club.category_id]}>
            {categoryIdProperty[club.category_id]}
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
    </StyledRoot>
  );
};

export default DetailHeader;
