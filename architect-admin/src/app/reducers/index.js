// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import reducerRedditApi from '../components/redditApi/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    form: reduxFormReducer,
    reducerRedditApi,
});

export default rootReducer;
