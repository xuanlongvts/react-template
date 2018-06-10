// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';


import reducerMyComApi from '../components/myComApi/reducer';

const rootReducer = combineReducers({
    reducerMyComApi
})

export default rootReducer;