import {take,takeEvery,put,call} from 'redux-saga/effects'
import * as types from './store/action-types';
const delay = ms => new Promise(function (resolve,reject) {
  setTimeout(function () {
    resolve();
  })
})
function* add(dispatch,action) {
  yield call(delay, 1000);
  // yield delay(1000);
  yield put({type:types.ADD})
}

function* watchAdd() {
  yield takeEvery(types.ADD_ASYNC,add);//*表示任意动作 如果动作类型匹配上了，就会向logger传递action
}

//
export function* rootSaga({getState, dispatch}) {
  // yield all([watchAdd(),watchLogger()]);
  yield watchAdd()
}


/*
thunk 会判断你派发的动作是一个函数还是一个对象，如果是函数会帮你执行一下，如果是对象就直接派发动作。










 */