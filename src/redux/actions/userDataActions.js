import { ActionTypes } from "../constants/action-types";

export const setUserData = (userDataState) => {
    return {
        type: ActionTypes.SET_USER_DATA,
        payload: userDataState,
    };
};