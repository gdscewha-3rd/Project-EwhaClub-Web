import { serverAxios } from "./index";

const PREFIX_URL = "/clubs";

export const getAllClub = async () => {
  console.log("전체 동아리 api 요청");
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}`);
    return { data };
  } catch (err) {
    return null;
  }
};
