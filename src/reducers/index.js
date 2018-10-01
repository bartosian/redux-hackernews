import { CombineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';


const rootReducer = {
  storyState: storyReducer,
  archiveState: archiveReducer
};

export default rootReducer;