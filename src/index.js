import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/index';
import { STORY_ARCHIVE } from "./constants/actionTypes";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App stories={ store.getState().storyState } onArchieve={ id =>  store.dispatch({ type: STORY_ARCHIVE, id })}/>, document.getElementById('root'));
registerServiceWorker();
