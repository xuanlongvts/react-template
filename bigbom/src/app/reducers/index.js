import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducerHomeEmail from '../components/home/reducer';
import loadingRoot from '../components/_base/loading/reducer';
import reducerNews from '../components/news/reducer';
import reducerLanguage from '../_utils/languages/reducers';

const rootReducer = combineReducers({
    router: routerReducer,
    loadingRoot,
    reducerHomeEmail,
    reducerNews,
    reducerLanguage
});

export default rootReducer;
