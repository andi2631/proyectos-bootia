import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {createStore} from "redux"
import allReducers from './reducers'

const reduxStore = createStore(allReducers); //se crea el store que contiene todos los datos de la app

//El <Provider store={reduxStore}>
//<App/>
//</Provider>
//Me habilita el store, al traves de toda la app

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={reduxStore}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
