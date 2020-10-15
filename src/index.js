import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Top from "./page/top";
import Home from "./page/home";
import Bottom from "./page/bottom";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Top />
//     <Home />
//     <Bottom/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <Top /><Home /> <Bottom />
  </div>
  , document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
