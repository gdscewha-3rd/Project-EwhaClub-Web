import {
    Category,
    Hits,
    ImgWrapper,
    LeftSection,
    ReactionWrapper,
    RightSection,
    ShortDesc,
    Sns,
    State,
    StyledRoot,
    TagsWrapper,
    Title,
} from "./style";
import { EmptyHeart, FaceBookIcon, InstaIcon, YoutubeIcon } from "asset/icons";
import { categories } from "constants/categories";
import { state } from "constants/state";

const DetailHeader = ({ club }) => {
    console.log("세부", club);
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
                    <Category color={categories[club.category_id].color}>
                        {categories[club.category_id].name}
                    </Category>
                    <State
                        color={state[club.is_recruiting].color}
                        fontColor={state[club.is_recruiting].fontColor}
                    >
                        {state[club.is_recruiting].name}
                    </State>
                </TagsWrapper>
            </LeftSection>
            <RightSection>
                <ImgWrapper>
                    <img src={club.main_img_url} alt={club.name}></img>
                </ImgWrapper>
                <ReactionWrapper>
                    <Hits>조회수 {club.view_cnt}</Hits>
                    <img src={EmptyHeart} alt="좋아요" />
                </ReactionWrapper>
            </RightSection>
        </StyledRoot>
    );
};

export default DetailHeader;
