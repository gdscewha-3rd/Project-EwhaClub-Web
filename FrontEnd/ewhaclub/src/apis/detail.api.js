import { serverAxios } from "./index";

const PREFIX_URL = "/clubs";

export const getClubData = async (id) => {
    try {
        const { data } = await serverAxios.get(`${PREFIX_URL}/${id}`);
        return { data };
    } catch (err) {
        return null;
    }
};
