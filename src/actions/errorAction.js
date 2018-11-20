import {
    ERROR_HANDLING
} from './types';

export function handleError(error) {
    console.log(error);
    return {
        type: ERROR_HANDLING,
        error: error
    };
}
