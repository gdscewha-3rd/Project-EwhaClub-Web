import { serverAxios } from "./index";

const PREFIX_URL = "/like";

export const postlike = async (token, id) => {
  console.log("종아요 요청 api 요청", token);
  try {
    const response = await serverAxios.post(`${PREFIX_URL}/${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
        /* "Content-Type": "application/json",*/
      },
    });
    console.log(response);
    return response;
  } catch (err) {
    return err;
  }
};
