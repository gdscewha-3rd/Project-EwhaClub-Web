import { serverAxios } from "./index";

const PREFIX_URL = "/users/signup";

// 이메일 중복 확인
export const SignIn = async (form) => {
    try {
        const { data } = await serverAxios.post(`${PREFIX_URL}/checkEmail`, form);

        if (data.message !== "non valid account") {
            const token = data.message;
            return token;
        } else {
            throw Error("다시 시도해주세요");
        }
    } catch (err) {
        return null;
    }
};

// 닉네임 중복 확인
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

// 회원가입
export const Signup = async (form) => {
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
