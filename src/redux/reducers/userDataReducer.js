import { ActionTypes } from "../constants/action-types";


export const intialStateuserData = {id:-1};
export const userDataReducer = (state = intialStateuserData, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER_DATA:
            return payload;
        default:
            return state;
    }
};