import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import reducCart from '../components/cart/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    form: reduxFormReducer,
    reducCart
});

export default rootReducer;
