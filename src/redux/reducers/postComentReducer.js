import { ActionTypes } from "../constants/action-types";


export const intialStateComent = {
    data:[],
    total:-1
};
export const postComentReducer = (state = intialStateComent, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COMENT_POST:
            return payload;
        default:
            return state;
    }
};