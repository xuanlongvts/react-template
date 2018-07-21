import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import store from './app/stores';
import Routes from './app/routers';

library.add(fab, fas);
ReactDOM.render(
    <Provider store={store()}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
