import { ActionTypes } from "../constants/action-types";

export const setPost = (postState) => {
    return {
        type: ActionTypes.SET_POST,
        payload: postState,
    };
};