import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

const feedback = (state = {}, action) => {
    console.log(action.payload);
    if (action.type === 'FEELING-ENTRY') {
        //whatever is returned will be saved in redux
        return {...state,
                feeling: action.payload}   
    }
    if (action.type === 'UNDERSTANDING-ENTRY') {
        //whatever is returned will be saved in redux
        return {...state,
            understanding: action.payload
        }
    }
    if (action.type === 'SUPPORTED-ENTRY') {
        //whatever is returned will be saved in redux
        return {...state,
            supported: action.payload
        }
    }
    if (action.type === 'COMMENTS-ENTRY') {
        //whatever is returned will be saved in redux
        return {...state,
            comments: action.payload
        }
    }
    return state;
}

// const deliveryType = (state = '', action) => {
//     if (action.type === 'DELIVERYTYPE') {
//         return action.payload
//     }
//     console.log('This is your delivery type', state)
//     return state;
// }

// let addToCart = [];
// addToCart.name

// const addToCartReducer = (state = [], action) => {
//     if (action.type === 'ADD_PRODUCT') {
//         return [...state, action.payload]
//     }
//     return state;
// }

// const customerReducer = (state = {}, action) => {
//     if (action.type === 'ADD_CUSTOMER') {
//         return action.payload
//     }
//     console.log('This is your customer', state)
//     return state;
// }

const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
