import { serverAxios } from "./index";

const PREFIX_URL = "/users";

export const SignIn = async (form) => {
  console.log("로그인 api 요청", form);
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/signin`, form);

    if (data.message !== "non valid account") {
      localStorage.setItem("token", JSON.stringify(data.message));
    }
    return data.message;
  } catch (err) {
    return err;
  }
};
