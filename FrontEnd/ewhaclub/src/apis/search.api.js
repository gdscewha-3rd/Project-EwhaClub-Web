import { serverAxios } from "./index";

const PREFIX_URL = "/clubs";

export const getResultArr = async (name) => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/search?name=${name}`);
    return { data };
  } catch (err) {
    return null;
  }
};
