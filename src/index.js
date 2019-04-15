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




// PS：疑惑
// 1、“合成事件”和“原生事件”---》什么是合成？什么是原生？
// 2、findDOMNode() 不能用在无状态组件上---》什么是无状态组件。
