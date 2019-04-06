import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app/components/chatbox/App.jsx';
import {store} from './src/app/store.js';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
);