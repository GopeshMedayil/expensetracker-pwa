import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
</BrowserRouter>, document.getElementById('root'));
