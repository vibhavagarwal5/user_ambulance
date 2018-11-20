import {
    BOOK_TRIP,
    TRIP_LOADING
} from '../actions/types';

const INITIAL_STATE = {
    trip:null
};

export default function (state = INITIAL_STATE, action) {
    let result = Object.assign({}, state);
    switch (action.type) {
        case BOOK_TRIP:
            return {
                ...result,
                trip: action.trip
            };
        case TRIP_LOADING:
            return {
                ...result,
                loading: action.loading
            };
        default:
            return state;
    }
}
