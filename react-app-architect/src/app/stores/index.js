import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import ENV from '../../config';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const storeConfig = () => {
    const initState = {};
    const sagaMiddleware = createSagaMiddleware();
    const routesMiddleware = routerMiddleware(createHistory());

    const middlewares = [
        sagaMiddleware,
        routesMiddleware,
    ];
    
    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const composeEnhancers = (ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        }) : compose;

    const store = createStore(
        combineReducers({
            rootReducer, 
            router: routerReducer 
        }),
        initState,
        composeEnhancers(...enhancers)
    );
    sagaMiddleware.run(rootSaga);

    return store;
}

export default storeConfig;