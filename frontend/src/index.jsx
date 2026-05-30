import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollToTop from "./components/utils/ScrollToTop";
import reportWebVitals from './reportWebVitals';
import { routerMode } from './config';

import { BrowserRouter, HashRouter } from 'react-router-dom'

const Router = routerMode === 'hash' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
