import { put, take, fork, delay } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import localStogeAdapter from '../../_utils/localStorage';
import * as nameConst from './const';
import { loadingOpen, loadingClose } from '../../components/_base/loadingApp/action';
import { routerFull, routerNotFull, loginSuccess, logoutSuccess } from './action';

function* login() {
    while (true) {
        const { inforAcc } = yield take(nameConst.ACC_LOGIN);
        const { valEmail } = inforAcc;
        yield put(loadingOpen());
        yield delay(1000);

        if (valEmail === 'admin@gmail.com') {
            yield put(routerFull());
        } else {
            yield put(routerNotFull());
        }
        yield put(loadingClose());
        yield put(loginSuccess('123', 'Success'));
        localStogeAdapter.setItemJson('memToken', '123');
    }
}

function* logout() {
    while (true) {
        yield take(nameConst.ACC_LOGOUT);
        yield put(loadingOpen());
        yield delay(1000);

        yield put(logoutSuccess());
        yield put(loadingClose());
        localStogeAdapter.removeItem('memToken');
        window.location.href = '/';
        // yield put(push('/'));
    }
}

export default function* root() {
    yield fork(login);
    yield fork(logout);
}
