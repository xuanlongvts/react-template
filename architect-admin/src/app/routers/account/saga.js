import { put, take, fork, delay } from 'redux-saga/effects';
import * as nameConst from './const';
import { loadingClose } from '../../components/_base/loadingApp/action';

function* login() {
    while (true) {
        const { inforAcc } = yield take(nameConst.ACC_LOGIN);
        console.log('inforAcc: ', inforAcc);
        yield delay(1000);
        yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(login);
}
