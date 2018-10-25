import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import logo from './images/logo.svg';
import './styles/index.css';

import store from './app/stores';
import Routes from './app/routers';

ReactDOM.render(
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React v2</h1>
        </header>
        <Provider store={store()}>
            <Routes />
        </Provider>
    </div>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
