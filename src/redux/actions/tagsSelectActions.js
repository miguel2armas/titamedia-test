import { ActionTypes } from "../constants/action-types";

export const setTag = (tagsSelectState) => {
    return {
        type: ActionTypes.SET_TAG,
        payload: tagsSelectState,
    };
};