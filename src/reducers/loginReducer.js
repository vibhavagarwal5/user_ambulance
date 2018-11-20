import {
    SIGNUP,
    SIGNIN,
    LOGIN_LOADING
} from '../actions/types';

const INITIAL_STATE = {
    user:null,
    token:null
};

export default function (state = INITIAL_STATE, action) {
    let result = Object.assign({}, state);
    switch (action.type) {
        case SIGNUP:
            return {
                ...result,
                user: action.user
            };
        case SIGNIN:
            return {
                ...result,
                token: action.token
            };
        case LOGIN_LOADING:
            return {
                ...result,
                loading: action.loading
            };
        default:
            return state;
    }
}
