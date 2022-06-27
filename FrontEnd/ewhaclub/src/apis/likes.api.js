import { serverAxios } from "./index";

const PREFIX_URL = "/like";

export const likes = async (token) => {
  console.log("종아요 api 요청", token);
  try {
    const response = await serverAxios.get(`${PREFIX_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        /* "Content-Type": "application/json",*/
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
