import {ActionTypes} from "../constants/action-types";


export const intialState = {
    theme:'light'
};
export const themeReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.THEME_DARK:
            localStorage.setItem("theme", "dark");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'dark');
            return {
                theme: 'dark'
            };
        case ActionTypes.THEME_LIGTH:
            localStorage.setItem("theme", "light");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'light');
            return {
                theme: 'light'
            };
        default:
            return state;
    }
};