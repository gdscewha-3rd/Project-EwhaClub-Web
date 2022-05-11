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
import { InstaIcon, YoutubeIcon } from "asset";

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

const club = {
  id: 0,
  main_img_url:
    "https://cdn.univ20.com/wp-content/uploads/2015/06/21168405ba71388a2fed9cc5b3af8e43.png",
  name: "영화패 누에",
  category_name: "공연",
  short_description:
    "영화패 누에는 여성문제와 구체적인 사회현실의 모순을 영상으로 제작하고 있습니다.",
  is_recruiting: 0,
};

const DetailBox = () => {
  return (
    <StyledRoot>
      <Header>
        <Introduce>
          <Title>
            <h1>{club.name}</h1>
            <Sns>
              <InstaIcon />
              <YoutubeIcon />
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
