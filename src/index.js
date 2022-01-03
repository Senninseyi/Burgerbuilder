import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import axios from 'axios';
import reportWebVitals from './reportWebVitals';

import burgerbuilderReducer from './store/reducer/burgerbuilder.js'
import thunk from 'redux-thunk';

// axios.interceptors.request.use(request => {
//   console.log(request);
//   return request;
// }, error => {
//   console.log(error);
//   return Promise.reject(error)
// })

// axios.interceptors.response.use(response => {
//   console.log(response);
//   return response;
// }, error => {
//   console.log(error);
//   return Promise.reject(error)
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(burgerbuilderReducer , composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
