import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DevManager from './DevManager';
import reportWebVitals from './reportWebVitals';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080"
// axios.defaults.headers.Authorization = "";
axios.defaults.headers = {
  "Content-Type": `application/json;charset=UTF-8`,
  "Accept": "application/json",

//   // 추가  
//   "Access-Control-Allow-Origin": "http://localhost:8080/",
//   'Access-Control-Allow-Credentials':"true",
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DevManager />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
