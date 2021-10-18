import { ActionTypes } from "../constants/action-types";

export const setPage = (pageSelectState) => {
    return {
        type: ActionTypes.SET_PAGE,
        payload: pageSelectState,
    };
};