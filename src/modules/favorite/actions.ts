import { ArticleInfo } from '@/types';
import { createAction } from 'typesafe-actions';

export const ADD_FAVORITE = 'favorite/ADD_FAVORITE';
export const REMOVE_FAVORITE = 'favorite/REMOVE_FAVORITE';

export const addFavorite = createAction(ADD_FAVORITE)<ArticleInfo>();

export const removeFavorite = createAction(REMOVE_FAVORITE)<string>();
