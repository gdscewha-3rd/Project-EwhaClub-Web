import { serverAxios } from "./index";

const PREFIX_URL = "/like";

export const dellike = async (token, id) => {
  console.log("종아요 삭제 api 요청", token);
  try {
    const response = await serverAxios.delete(`${PREFIX_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {},
    });
    console.log(response);
    return response;
  } catch (err) {
    return err;
  }
};
