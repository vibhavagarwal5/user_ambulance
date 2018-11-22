import {
    API_URL,
    TRIP_LOADING,
    BOOK_TRIP,
    GET_TRIP,
    FLIP_TRIP,
    END_TRIP
} from './types';
import {
    handleError
} from './errorAction';
import axios from 'axios';

import configureStore from '../utils/store';
let {
    store,
    persistor
} = configureStore();

export const bookTrip = (body) => {
    return dispatch => {
        console.log(body);
        dispatch(tripLoading(true));
        return new Promise((resolve, reject) => {
            axios.post(API_URL + 'trip/', body, {
                    headers: {
                        Authorization: store.getState().login.user.token
                    }
                }).then((response) => {
                    console.log('response', response);
                    resolve(dispatch(bookTripHelper(response.data)));
                    dispatch(tripLoading(false));
                })
                .catch(error => {
                    reject(handleError(error));
                    dispatch(tripLoading(false));
                });
        })
    };
};

export const getTrip = (id) => {
    return dispatch => {
        dispatch(tripLoading(true));
        return new Promise((resolve, reject) => {
            axios.get(API_URL + 'trip/?id='+id, {
                    headers: {
                        Authorization: store.getState().login.user.token
                    }
                }).then((response) => {
                    console.log('response', response);
                    resolve(dispatch(getTripHelper(response.data)));
                    dispatch(tripLoading(false));
                })
                .catch(error => {
                    reject(handleError(error));
                    dispatch(tripLoading(false));
                });
        })
    };
};

function tripLoading(bool) {
    return {
        type: TRIP_LOADING,
        loading: bool
    };
}

function bookTripHelper(details) {
    return {
        type: BOOK_TRIP,
        trip: details
    };
}

function getTripHelper(details) {
    return {
        type: GET_TRIP,
        trip: details
    };
}

export function flipTrip() {
    return {
        type: FLIP_TRIP,
        user2hosp: true
    }
}

export function endTrip() {
    return {
        type: END_TRIP,
        trip: null,
        amb2user: true,
        user2hosp: false
    }
}
