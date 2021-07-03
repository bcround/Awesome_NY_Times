import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AsyncState<T, E = any> = {
  loading: boolean;
  data: T | null;
  error: E | null;
};

export type ArticleAction = ActionType<typeof actions>;
