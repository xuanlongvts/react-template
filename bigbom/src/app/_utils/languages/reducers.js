import { fromJS } from 'immutable';
import { SET_LANGUAGES } from './consts';

const initialState = fromJS({
    lang: null
});

const language = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGES:
            return state.set('lang', action.lang);
        default:
            return state;
    }
};

export default language;
