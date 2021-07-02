import { asyncState, createAsyncReducer, transformToArray } from '@/utils/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { getArticleAsync } from './actions';
import { ArticleAction, ArticleState } from './types';

const initialState: ArticleState = {
  articleInfo: asyncState.initial(),
};

const article = createReducer<ArticleState, ArticleAction>(initialState).handleAction(
  transformToArray(getArticleAsync),
  createAsyncReducer(getArticleAsync, 'articleInfo'),
);

export default article;
