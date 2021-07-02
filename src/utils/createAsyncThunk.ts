import { Dispatch } from 'redux';
import { AnyAsyncActionCreator } from '@/types';

type AnyPromiseCreator = (...params: any[]) => Promise<any>;

const createAsyncThunk = <A extends AnyAsyncActionCreator, F extends AnyPromiseCreator>(
  asyncActionCreator: A,
  promiseCreator: F,
) => {
  type Params = Parameters<F>;

  return (...params: Params) =>
    async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;

      dispatch(request(undefined));
      try {
        const result = await promiseCreator(...params);

        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
};

export default createAsyncThunk;
