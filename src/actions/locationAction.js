import {
    CURR_LOCATION, CURR_REGION
} from './types';
import {
    handleError
} from './errorAction';

export const watchCurrLocation = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.watchPosition(
                position => {
                    let data = {};
                    data.latitude = parseFloat(position.coords.latitude);
                    data.longitude = parseFloat(position.coords.longitude);
                    resolve(dispatch(set_currLocation(data)));
                },
                error => {
                    reject(dispatch(handleError(error)));
                    console.log(error.message);
                }
                // {
                // 	enableHighAccuracy: true,
                // 	timeout: 20000,
                // 	maximumAge: 1000,
                // 	distanceFilter: 10
                // }
            );
        });
    };
};

export function set_curr_region(region) {
    return {
        type: CURR_REGION,
        curr_region: region
    };
}

function set_currLocation(location) {
    return {
        type: CURR_LOCATION,
        curr_coordinates: location
    };
}
