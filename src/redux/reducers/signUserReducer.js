import { ActionTypes } from "../constants/action-types";


export const intialState = {
    stateLogIn:false,
    googleId:"",
    name:"",
    email:"",
    imageUrl:""
};
export const UserReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SIGNIN_USER:
            payload = {...payload, stateLogIn: true}
            return payload;
        case ActionTypes.SIGNOUT_USER:
            return intialState;
        default:
            return state;
    }
};