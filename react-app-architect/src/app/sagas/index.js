import { fork, call, race } from 'redux-saga/effects';

import myCompApiSaga from '../components/myComApi/saga';

export default function* rootSaga(){
    yield fork(myCompApiSaga);
}