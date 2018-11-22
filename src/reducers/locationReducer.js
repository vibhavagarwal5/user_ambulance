import {
    CURR_LOCATION, CURR_REGION
} from '../actions/types';

const INITIAL_STATE = {
    curr_coordinates: {
        latitude: 12.843867,
        longitude: 77.6629186,
    },
    curr_region:{
        latitude: 12.843867,
        longitude: 77.6629186,
        latitudeDelta: 0.0052,
        longitudeDelta: 0.0052
    }
};

export default function (state = INITIAL_STATE, action) {
    let result = Object.assign({}, state);
    switch (action.type) {
        case CURR_LOCATION:
            return {
                ...result,
                curr_coordinates: action.curr_coordinates
            };
        case CURR_REGION:
            return {
                ...result,
                curr_region: action.curr_region
            };
        default:
            return state;
    }
}
