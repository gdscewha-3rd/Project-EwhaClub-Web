import { serverAxios } from "./index";

const PREFIX_URL = "/users/signup";

// 이메일 중복 확인
export const postCheckEmail = async (email) => {
    try {
        const { data } = await serverAxios.post(`${PREFIX_URL}/checkEmail`, email);

        if (data.message !== "non valid account") {
            const token = data.message;
            return token;
        } else {
            throw Error("다시 시도해주세요");
        }
    } catch (err) {
        return err;
    }
};

// 닉네임 중복 확인
export const postCheckNickName = async (nickname) => {
    try {
        const { data } = await serverAxios.post(`${PREFIX_URL}/checkName`, nickname);

        if (data.message !== "non valid account") {
            const token = data.message;
            return token;
        } else {
            throw Error("다시 시도해주세요");
        }
    } catch (err) {
        return err;
    }
};
// 회원가입
export const postSignUp = async (form) => {
    try {
        const { data } = await serverAxios.post(`${PREFIX_URL}`, form);

        if (data.message !== "non valid account") {
            const token = data.message;
            return token;
        } else {
            throw Error("다시 시도해주세요");
        }
    } catch (err) {
        return err;
    }
};
