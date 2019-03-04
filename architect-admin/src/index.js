import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/index.css';
import store from './app/stores';
import Routes from './app/routers';
import LoadingApp from './app/components/_base/loadingApp';

const theme = createMuiTheme({
    palette: {
        secondary: {
            light: amber[300],
            main: amber[500],
            dark: amber[700],
        },
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
        },
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <Provider store={store()}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />

            <LoadingApp />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
