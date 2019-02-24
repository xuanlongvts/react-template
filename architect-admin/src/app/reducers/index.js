import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import loadingRoot from '../components/_base/loadingApp/reducer';
import reducerAccount from '../routers/account/reducer';
import reducerRedditApi from '../components/redditApi/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    form: reduxFormReducer,
    loadingRoot,
    reducerAccount,
    reducerRedditApi,
});

export default rootReducer;
