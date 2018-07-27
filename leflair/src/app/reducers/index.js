import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import reducCart from '../components/cart/reducer';
import reducLoading from '../components/_base/loading/reducer';
import reducModal from '../components/_base/modal/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    form: reduxFormReducer,
    reducLoading,
    reducCart,
    reducModal
});

export default rootReducer;
