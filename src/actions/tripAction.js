import {
    API_URL, TRIP_LOADING, BOOK_TRIP
} from './types';
import {
    handleError
} from './errorAction';
import axios from 'axios';

import configureStore from '../utils/store';
let { store, persistor } = configureStore();

export const bookTrip = (body) => {
    return dispatch => {
        console.log(body);
        dispatch(tripLoading(true));
        return new Promise((resolve, reject) => {
            axios.post(API_URL+'trip/',body,{
                headers:{
                    Authorization: store.getState().login.token
                  }
            }).then((response) => {
                console.log('response',response);
                resolve(dispatch(bookTripHelper(response.data)));
                dispatch(tripLoading(false));
            })
            .catch(error =>{
                reject(handleError(error));
                dispatch(tripLoading(false));
            });
        })
    };
};

export function tripLoading(bool) {
    return {
        type: TRIP_LOADING,
        loading: bool
    };
}

export function bookTripHelper(details) {
    return {
        type: BOOK_TRIP,
        trip: details
    };
}
