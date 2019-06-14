import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = [], action) => {
    if(action.type === 'FEELING_LIST'){
        console.log(action.payload)
        return action.payload;
    }
    return state
}

const understandingReducer = (state = [], action) => {
    if(action.type === 'UNDERSTANDING_LIST'){
        console.log(action.payload)
        return action.payload;
    }
    return state
}

const supportReducer = (state = [], action) => {
    if(action.type === 'SUPPORT_LIST'){
        console.log(action.payload)
        return action.payload;
    }
    return state
}

const commentReducer = (state = [], action) => {
    if(action.type === 'COMMENT_LIST'){
        console.log(action.payload)
        return action.payload;
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer, 
        understandingReducer, 
        supportReducer, 
        commentReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


