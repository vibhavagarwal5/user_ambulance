import locationReducer from './locationReducer';

// Collection of all the reducers with keys to gathers their
// results into a single state object.
const allReducers = {
    location: locationReducer,
};

export default allReducers;
