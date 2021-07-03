import { AnyAsyncActionCreator } from '@/types';

export const transformToArray = <AC extends AnyAsyncActionCreator>(asyncActionCreator: AC) => {
  const { request, success, failure } = asyncActionCreator;

  return [request, success, failure];
};
