import { put, take, fork, delay } from 'redux-saga/effects';
import * as nameConst from './const';
import { loadingClose } from '../../components/_base/loadingApp/action';
import { routerFull, routerNotFull, loginSuccess } from './action';

function* login() {
    while (true) {
        const { inforAcc } = yield take(nameConst.ACC_LOGIN);
        const { valEmail } = inforAcc;
        yield delay(1000);
        yield put(loadingClose());

        if (valEmail === 'admin@gmail.com') {
            yield put(routerFull());
        } else {
            yield put(routerNotFull());
        }
        yield put(loginSuccess('123', 'Success'));
    }
}

export default function* root() {
    yield fork(login);
}
