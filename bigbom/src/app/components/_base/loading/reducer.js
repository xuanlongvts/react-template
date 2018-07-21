import { fromJS } from 'immutable';
import { COMMON_LOADING_OPEN, COMMON_LOADING_CLOSE } from './consts';

const initialState = fromJS({
    isLoading: false
});

const loading = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_LOADING_OPEN:
        case COMMON_LOADING_CLOSE:
            return state.set('isLoading', action.isLoading);
        default:
            return state;
    }
};

export default loading;
