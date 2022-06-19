import { colors } from "styles/styleObj";

export const state = {
    0: {
        stateName: "모집마감",
        fontColor: `${colors.black.grey}`,
        color: `${colors.white.origin}`,
        border: `${colors.black.light_grey_1}`,
    },
    1: {
        stateName: "모집중",
        fontColor: `${colors.black.grey}`,
        color: `${colors.black.light_grey_1}`,
        border: `${colors.black.light_grey_1}`,
    },
    2: {
        stateName: "상시모집",
        fontColor: `${colors.white.origin}`,
        color: `${colors.black.light_grey_4}`,
        border: `${colors.black.light_grey_4}`,
    },
};

// 모집 상태 상수 헤헷
