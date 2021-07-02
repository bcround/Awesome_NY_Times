import { Article } from '@/types';
import { AsyncState } from '@/utils/reducerUtils';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ArticleAction = ActionType<typeof actions>;

export type ArticleState = {
  articleInfo: AsyncState<Article[], Error>;
};
