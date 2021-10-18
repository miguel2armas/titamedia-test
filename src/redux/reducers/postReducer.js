import { ActionTypes } from "../constants/action-types";


export const intialState = {
    data:[]
};
export const postReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_POST:
            return payload;
        default:
            return state;
    }
};