import {
    ERROR_HANDLING
} from './types';

export function handleError(error) {
    return {
        type: ERROR_HANDLING,
        error: error
    };
}
