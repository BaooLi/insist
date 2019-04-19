import {take,put} from 'redux-saga/effects';
import * as types from './store/action-types';
export function* rootSaga() {
  // take 等待一个动作发生
  let action = yield take(types.ADD_ASYNC);
  yield put ({type: types.ADD})
}