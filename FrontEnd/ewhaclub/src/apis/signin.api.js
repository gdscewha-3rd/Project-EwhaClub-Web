import { serverAxios } from "./index";

const PREFIX_URL = "/users";

export const SignIn = async (form) => {
  console.log("로그인 api 요청", form);
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/signin`, form);

    if (data.message !== "non valid account") {
      const token = data.message;
      return token;
    } else {
      throw Error("존재하지 않는 계정입니다!!");
    }
  } catch (err) {
    return null;
  }
};
