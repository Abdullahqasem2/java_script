import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
const myelement = (
<div>
  <h1>
    Hello Dojo !
  </h1>
  <h3>
  Things I need to do
  </h3>
  <ul>
    <li>Learn react</li>
    <li>Clim everist</li>
    <li>Run a marathon</li>
    <li>Feed the doogs</li>
  </ul>
  </div>
);
ReactDOM.render(myelement, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
