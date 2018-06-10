import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers';
import rootSaga from '../components/myComApi/saga';

const storeConfig = () => {
    const initState = {};
    const sagaMiddleware = createSagaMiddleware();
    const routesMiddleware = routerMiddleware();

    const store = createStore(
        combineReducers({
            rootReducer, 
            router: routerReducer 
        }),
        initState,
        compose(
            applyMiddleware(sagaMiddleware),
            applyMiddleware(routesMiddleware),
        )
    );
    sagaMiddleware.run(rootSaga);

    return store;
}

export default storeConfig;