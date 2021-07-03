import { Response } from '@/types';
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

type Request = unknown;

export const GET_ARTICLE = 'article/GET_ARTICLE';
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_ERROR = 'article/GET_ARTICLE_ERROR';
export const RESET_ARTICLE = 'article/RESET_ARTICLE';
export const TOGGLE_LIKE = 'artilce/TOGGLE_LIKE';

export const getArticleAsync = createAsyncAction(GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_ERROR)<
  Request,
  Response,
  AxiosError
>();

export const resetArticle = createAction(RESET_ARTICLE)();

export const toggleLike = createAction(TOGGLE_LIKE)<string>();
