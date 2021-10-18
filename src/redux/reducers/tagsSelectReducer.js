import { ActionTypes } from "../constants/action-types";


export const intialTagState = "";
export const tagsSelectReducer = (state = intialTagState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TAG:
            return payload;
        default:
            return state;
    }
};