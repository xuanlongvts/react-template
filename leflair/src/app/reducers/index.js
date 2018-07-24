'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loadingRoot from '../components/_base/loading/reducer';
import reducCart from '../components/cart/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    loadingRoot,
    reducCart
});

export default rootReducer;
