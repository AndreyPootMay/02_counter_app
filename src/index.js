import React from 'react';
import ReactDOM from 'react-dom';

// import FirstApp from './firstApp';
import CounterApp from './CounterApp';
import './style.css';

const app = document.querySelector('#app');

//ReactDOM.render(<FirstApp greeting="Hi, I am Andrey" />, app);
ReactDOM.render(<CounterApp value={5} />, app);
