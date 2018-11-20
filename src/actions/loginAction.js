import {
    API_URL, LOGIN_LOADING, SIGNUP, SIGNIN
} from './types';
import {
    handleError
} from './errorAction';
import axios from 'axios';

export const signup = (body) => {
    return dispatch => {
        console.log(body);
        dispatch(loginLoading(true));
        return new Promise((resolve, reject) => {
            axios.post(API_URL+'patient/signup/',body).then((response) => {
                console.log('response',response);
                resolve(dispatch(signupHelper(response.data)));
                dispatch(loginLoading(false));
            })
            .catch(error =>{
                reject(handleError(error));
                dispatch(loginLoading(false));
            });
        })
    };
};

export const signin = (body) => {
    return dispatch => {
        console.log(body);
        dispatch(loginLoading(true));
        return new Promise((resolve, reject) => {
            axios.post(API_URL+'patient/signin/',body).then((response) => {
                console.log('response',response);
                resolve(dispatch(signinHelper(response.data.token)));
                dispatch(loginLoading(false));
            })
            .catch(error =>{
                reject(handleError(error));
                dispatch(loginLoading(false));
            });
        })
    };
};

export function loginLoading(bool) {
    return {
        type: LOGIN_LOADING,
        loading: bool
    };
}

export function signupHelper(details) {
    return {
        type: SIGNUP,
        user: details
    };
}

export function signinHelper(token) {
    return {
        type: SIGNIN,
        token: 'Token ' +token
    };
}
