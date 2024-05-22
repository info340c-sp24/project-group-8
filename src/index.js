import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './javascript/App';
import './css/template.css';
import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJX9a4iBbqPx3jUt5q387TRb0rO3kuF_M",
  authDomain: "m-f-u-i.firebaseapp.com",
  projectId: "m-f-u-i",
  storageBucket: "m-f-u-i.appspot.com",
  messagingSenderId: "1067112540809",
  appId: "1:1067112540809:web:d47620d088e43db1723458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
