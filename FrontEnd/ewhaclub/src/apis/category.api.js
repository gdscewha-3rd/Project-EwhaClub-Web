//카테고리별 동아리 가져오기
//clubs/{category}
import { serverAxios } from "./index";
const PREFIX_URL = "/clubs";
export const getCategoryClub = async (id) => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}`);
    return { data };
  } catch (err) {
    return null;
  }
};
