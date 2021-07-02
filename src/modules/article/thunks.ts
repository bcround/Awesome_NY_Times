import api from '@/api/api';
import createAsyncThunk from '@/utils/createAsyncThunk';
import { getArticleAsync } from './actions';

export const getArticleThunk = createAsyncThunk(getArticleAsync, api.searchNews);
