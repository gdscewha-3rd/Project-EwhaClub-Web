import { serverAxios } from "./index";

const PREFIX_URL = "/clubs/search?name=";
//http://3.39.17.219/clubs/search?name=po

export const getSearchData = async (name) => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}${name}`);
    return { data };
  } catch (err) {
    return null;
  }
};
