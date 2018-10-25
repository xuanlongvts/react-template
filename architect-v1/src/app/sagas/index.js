import { all, fork } from 'redux-saga/effects';

import myCompApiSaga from '../components/myComApi/saga';

export default function* rootSaga(){
    yield all([
        fork(myCompApiSaga)
    ]);
}