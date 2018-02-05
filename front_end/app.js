import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';


const jsx = (
        <AppRouter />
);


ReactDOM.render(jsx, document.getElementById('app'));

