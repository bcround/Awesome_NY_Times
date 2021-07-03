import { ArticleInfo } from '@/types';
import { createReducer } from 'typesafe-actions';
import { ADD_FAVORITE, REMOVE_FAVORITE } from './actions';
import { FavoriteAction } from './types';

const initialState: ArticleInfo[] = [];

const favorite = createReducer<ArticleInfo[], FavoriteAction>(initialState, {
  [ADD_FAVORITE]: (state, action) => [...state, action.payload],
  [REMOVE_FAVORITE]: (state, { payload: id }) => state.filter((articleInfo) => articleInfo._id !== id),
});

export default favorite;
