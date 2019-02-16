// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducerRedditApi from '../components/redditApi/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    reducerRedditApi,
});

export default rootReducer;
