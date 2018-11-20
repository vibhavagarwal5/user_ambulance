import locationReducer from './locationReducer';
import loginReducer from './loginReducer';
import sceneReducer from './sceneReducer';
import tripReducer from './tripReducer';

// Collection of all the reducers with keys to gathers their
// results into a single state object.
const allReducers = {
    location: locationReducer,
    login: loginReducer,
    trip: tripReducer,
    scene: sceneReducer
};

export default allReducers;
