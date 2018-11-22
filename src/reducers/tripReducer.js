import {
    BOOK_TRIP,
    TRIP_LOADING,
    GET_TRIP,
    FLIP_TRIP,
    END_TRIP
} from '../actions/types';

const INITIAL_STATE = {
    trip:null,
    loading:false,
    amb2user: true,
    user2hosp: false
};

export default function (state = INITIAL_STATE, action) {
    let result = Object.assign({}, state);
    switch (action.type) {
        case BOOK_TRIP:
            return {
                ...result,
                trip: action.trip
            };
        case GET_TRIP:
            return {
                ...result,
                trip: action.trip
            };
        case TRIP_LOADING:
            return {
                ...result,
                loading: action.loading
            };
        case FLIP_TRIP:
            return {
                ...result,
                amb2user: !action.user2hosp,
                user2hosp: action.user2hosp
            };
        case END_TRIP:
            return {
                ...result,
                trip: action.trip,
                amb2user: action.amb2user,
                user2hosp: action.user2hosp
            }
        default:
            return state;
    }
}
