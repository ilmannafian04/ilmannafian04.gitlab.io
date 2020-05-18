import { ApolloProvider } from '@apollo/react-hooks';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'typeface-roboto';

import App from './app/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

Axios.defaults.baseURL = 'https://ilmannafian04.herokuapp.com/';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const client = new ApolloClient({
    uri: 'https://ilmannafian04.herokuapp.com/graphql',
    request: (operation) => {
        const token = window.sessionStorage.getItem('yep')
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <CssBaseline />
                    <App />
                </HashRouter>
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
