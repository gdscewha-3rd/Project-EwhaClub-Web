import { ImgWrapper, SectionDesc, SectionTitle, StyledRoot } from "./style";

const DetailInfo = ({ club }) => {
  return (
    <StyledRoot>
      <section>
        <SectionTitle>소개</SectionTitle>
        <SectionDesc>{club.detail_description}</SectionDesc>
      </section>
      <section>
        <SectionTitle>주요활동</SectionTitle>
        <SectionDesc>{club.detail_activity}</SectionDesc>
      </section>
      <section>
        <SectionTitle>모집</SectionTitle>
        <SectionDesc>
          <div>
            {club.recruit_start && club.recruit_end && (
              <>
                <strong>모집 기한 :</strong>
                {club.recruit_start} ~ {club.recruit_end}
              </>
            )}
          </div>
          <div>
            {club.recruit_requirement && (
              <>
                <strong>모집 요건:</strong>
                {club.recruit_requirement}
              </>
            )}
          </div>
          <div>
            {club.how_to_apply && (
              <>
                <strong>지원 방법:</strong>
                {club.how_to_apply}
              </>
            )}
          </div>
        </SectionDesc>
      </section>
      <section>
        <SectionTitle>포스터</SectionTitle>
        <ImgWrapper>
          <img src={club.poster_img_url} alt="" />
        </ImgWrapper>
      </section>
    </StyledRoot>
  );
};

export default DetailInfo;
