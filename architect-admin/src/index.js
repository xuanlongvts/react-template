import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/index.css';
import store from './app/stores';
import Routes from './app/routers';

const theme = createMuiTheme({
    palette: {
        secondary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        primary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <div className="App">
        <Provider store={store()}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Routes />
            </MuiThemeProvider>
        </Provider>
    </div>,
    document.getElementById('root'),
);
