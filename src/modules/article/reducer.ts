import { AnyAsyncActionCreator, Response } from '@/types';
import { transformToArray } from '@/utils/reducerUtils';
import { ActionType, createReducer, getType } from 'typesafe-actions';
import { getArticleAsync, resetArticle } from './actions';
import { ArticleAction, AsyncState } from './types';

const initialState: AsyncState<Response, Error> = {
  loading: false,
  data: null,
  error: null,
};

const articleAsyncReducer = (state: AsyncState<Response, Error>, action: ActionType<AnyAsyncActionCreator>) => {
  const [request, success, failure] = transformToArray(getArticleAsync).map(getType);
  const reset = getType(resetArticle);

  switch (action.type) {
    case reset:
      return {
        loading: false,
        data: null,
        error: null,
      };
    case request:
      return {
        ...state,
        loading: true,
      };
    case success:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload,
          docs: state.data ? [...state.data.docs, ...action.payload.docs] : action.payload.docs,
          meta: state.data ? { ...state.data.meta, hits: state.data.meta.hits - 10 } : action.payload.meta,
        },
      };
    case failure:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const article = createReducer<AsyncState<Response, Error>, ArticleAction>(initialState).handleAction(
  [...transformToArray(getArticleAsync), resetArticle],
  articleAsyncReducer,
);

export default article;
