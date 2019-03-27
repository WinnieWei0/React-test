import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './Tick';
import * as serviceWorker from './serviceWorker';
import Focus from './Focus'

const tick=()=>{
ReactDOM.render(
  <div>
    <Tick/>
    <Focus/>
    <App />
  </div>,
  document.getElementById('root')
);
}
setInterval(tick,1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
