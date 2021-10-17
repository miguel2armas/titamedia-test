import { ActionTypes } from "../constants/action-types";

export const setDarkTheme = () => {
    return {
        type: ActionTypes.THEME_DARK,
        payload: null,
    };
};
export const setLightTheme = () => {
    return {
        type: ActionTypes.THEME_LIGTH,
        payload: null,
    };
};