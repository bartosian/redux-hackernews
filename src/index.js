import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';
console.log(store.getState());

ReactDOM.render(<App stories={ store.getState().storyState } onArchieve={ () => {} }/>, document.getElementById('root'));
registerServiceWorker();
