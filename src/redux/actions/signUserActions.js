import { ActionTypes } from "../constants/action-types";

export const signInUser = (userState) => {
    return {
        type: ActionTypes.SIGNIN_USER,
        payload: userState,
    };
};
export const signOutUser = () => {
    return {
        type: ActionTypes.SIGNOUT_USER,
        payload: null,
    };
};