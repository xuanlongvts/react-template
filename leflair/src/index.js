import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import store from './app/stores';
import Routes from './app/routers';

ReactDOM.render(
    <Provider store={store()}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
