import { fork } from 'redux-saga/effects';

import myCompApiSaga from '../components/myComApi/saga';

export default function* rootSaga(){
    yield fork(myCompApiSaga);
}