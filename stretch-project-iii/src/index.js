import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App'
import Welcome from './App'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
