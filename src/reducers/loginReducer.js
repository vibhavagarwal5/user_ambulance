import {
    SIGNIN,
    LOGIN_LOADING
} from '../actions/types';

const INITIAL_STATE = {
    user:null,
    loading:false
};

export default function (state = INITIAL_STATE, action) {
    let result = Object.assign({}, state);
    switch (action.type) {
        case SIGNIN:
            return {
                ...result,
                user: {
                    ...result.user,
                    contact_number: action.user.contact_number,
                    dob: action.user.dob,
                    id: action.user.id,
                    name: action.user.name,
                    token: 'Token ' + action.user.token
                }
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
