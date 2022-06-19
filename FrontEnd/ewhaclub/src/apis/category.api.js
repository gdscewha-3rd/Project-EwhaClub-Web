//카테고리별 동아리 가져오기
//http://3.39.17.219/category/1
import { serverAxios } from "./index";
const PREFIX_URL = "/category";
export const getCategoryClub = async (id) => {
  console.log("카테고리별 동아리 api 요청", id);
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}`);
    return { data };
  } catch (err) {
    return null;
  }
};
