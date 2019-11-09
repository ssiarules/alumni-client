import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import mainAlumniReducer from './reducers/alumniReducer'; use for single reducer
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// when you have multiple reducer use this format - rootReducer
let store = createStore(rootReducer,applyMiddleware(thunk));


// when you have single reducer use this format - mainAluminiReducer
//let store = createStore(mainAlumniReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store } >
        < App />
    </Provider >,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
