import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
//
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunkMiddleware from 'react-redux';
// import {Provider} from 'react-redux';
// import reducer from './store/reducers/reducer-dishes';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware))
// );

const app = (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
