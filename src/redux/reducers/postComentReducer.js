import { ActionTypes } from "../constants/action-types";


export const intialState = {
    data:[]
};
export const postComentReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COMENT_POST:
            console.log({payload});
            return payload;
        default:
            return state;
    }
};