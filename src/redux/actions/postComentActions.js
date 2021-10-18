import { ActionTypes } from "../constants/action-types";

export const setComentPost = (postComentState) => {
    return {
        type: ActionTypes.SET_COMENT_POST,
        payload: postComentState,
    };
};