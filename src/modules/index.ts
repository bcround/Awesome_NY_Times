import { combineReducers } from 'redux';
import article from './article';
import favorite from './favorite';

const rootReducer = combineReducers({ article, favorite });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
