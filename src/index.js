import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App stories={ store.getState() } onArchieve={ () => {} }/>, document.getElementById('root'));
registerServiceWorker();
