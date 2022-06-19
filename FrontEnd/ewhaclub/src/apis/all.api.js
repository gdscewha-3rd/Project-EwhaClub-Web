import { serverAxios } from "./index";

const PREFIX_URL = "/clubs";

export const getAllClub = async () => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}`);
    return { data };
  } catch (err) {
    return null;
  }
};
