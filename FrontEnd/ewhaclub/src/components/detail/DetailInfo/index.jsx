import {
  DetailDesc,
  MainActivity,
  Poster,
  Recruitment,
  SectionDesc,
  SectionTitle,
  StyledRoot,
} from "./style";

const DetailInfo = ({ club }) => {
  return (
    <StyledRoot>
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
    </StyledRoot>
  );
};

export default DetailInfo;
