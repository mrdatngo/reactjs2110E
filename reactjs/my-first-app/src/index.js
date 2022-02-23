import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.min.css'
import { store } from './redux/store';
import { getToken, parseJwt } from './utils/tokenHandler';
import { LOGIN_SUCCESS } from './redux/const/actionTypes';

let token = getToken()
if (token) {
  // verify token
  let { email, exp } = parseJwt(token)
  exp *= 1000
  let curTimeStamp = new Date().getTime()

  if (exp > curTimeStamp) {
    // token valid
    store.dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        email,
        token
      }
    })
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  ,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
