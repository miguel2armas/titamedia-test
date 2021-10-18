import { ActionTypes } from "../constants/action-types";


export const intialStatePage = 0;
export const pageSelectReducer = (state = intialStatePage, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PAGE:
            return payload;
        default:
            return state;
    }
};