import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import * as serviceWorker from './serviceWorker';

import './styles/index.css';

import store from './app/stores';
import Routes from './app/routers';

ReactDOM.render(
    <div className="App">
        <Provider store={store()}>
            <Routes />
        </Provider>
    </div>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
