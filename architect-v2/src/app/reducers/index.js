// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducerMyComApi from '../components/myComApi/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    reducerMyComApi,
});

export default rootReducer;