import { AnyAsyncActionCreator, Response } from '@/types';
import { transformToArray } from '@/utils/reducerUtils';
import { ActionType, createReducer, getType } from 'typesafe-actions';
import { getArticleAsync, resetArticle, toggleLike } from './actions';
import { ArticleAction, AsyncState } from './types';

const initialState: AsyncState<Response, Error> = {
  loading: false,
  data: null,
  error: null,
};

const articleAsyncReducer = (state: AsyncState<Response, Error>, action: ActionType<AnyAsyncActionCreator>) => {
  const [request, success, failure] = transformToArray(getArticleAsync).map(getType);
  const reset = getType(resetArticle);
  const toggle = getType(toggleLike);

  switch (action.type) {
    case toggle:
      return {
        ...state,
        data: {
          ...state.data,
          docs: state.data
            ? state.data.docs.map((article) =>
                article._id === action.payload ? { ...article, isLiked: !article.isLiked } : article,
              )
            : null,
        },
      };
    case reset:
      return {
        ...state,
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
  [...transformToArray(getArticleAsync), resetArticle, toggleLike],
  articleAsyncReducer,
);

export default article;
