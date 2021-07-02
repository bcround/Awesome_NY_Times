import { Article } from '@/types';
import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';

type Request = unknown;

export const GET_ARTICLE = 'article/GET_ARTICLE';
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_ERROR = 'article/GET_ARTICLE_ERROR';

export const getArticleAsync = createAsyncAction(GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_ERROR)<
  Request,
  Article[],
  AxiosError
>();
