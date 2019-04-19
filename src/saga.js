import {takeEvery,put} from 'redux-saga/effects'
import * as types from './store/action-types';
function* add(dispatch,action) {
  // setTimeout(()=>{
  //   dispatch({type: types.ADD})
  // },1000)
  // put 就是指挥saga中间件向仓库派发一个动作
  yield put({type:types.ADD})
}

function* logger(action) {
  console.log(action);
}



//saga分为三类：1.rootSaga 2.监听saga 3.worker干活的saga
function* watchLogger() {
  yield takeEvery('*',logger);//*表示任意动作 如果动作类型匹配上了，就会向logger传递action
}
function* watchAdd() {
  yield takeEvery(types.ADD_ASYNC,add);//*表示任意动作 如果动作类型匹配上了，就会向logger传递action
}





//
export function* rootSaga({getState, dispatch}) {
  yield all([watchAdd(),watchLogger()]);

  // 监听派发给仓库的动作，如果动作类型匹配的话，会执行对应的生成器
  // yield takeEvery(types.ADD_ASYNC,add) // 是一个普通对象
  // yield takeEvery(types.ADD_ASYNC,add,dispatch) // 是一个普通对象
}


/*
thunk 会判断你派发的动作是一个函数还是一个对象，如果是函数会帮你执行一下，如果是对象就直接派发动作。










 */