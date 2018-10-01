import { createStore } from 'redux';
import storyReducer from '../reducers/index';

const store = createStore(
    storyReducer
);

export default store;