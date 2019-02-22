import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
            light: grey[300],
            main: grey[500],
            dark: grey[700],
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
    <Fragment>
        <Provider store={store()}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Routes />

                <LoadingApp />
            </MuiThemeProvider>
        </Provider>
    </Fragment>,
    document.getElementById('root'),
);
