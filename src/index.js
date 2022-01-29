import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import burgerbuilderReducer from './store/reducer/burgerbuilder.js'
import orderReducer from './store/reducer/order.js'
import authReducer from './store/reducer/auth.js'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  burgerbuilder: burgerbuilderReducer,
  orders: orderReducer,
  auth: authReducer,
})

const store = createStore(rootReducer , composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
