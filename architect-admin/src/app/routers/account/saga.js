import { put, take, fork, delay } from 'redux-saga/effects';

import { history } from '../../stores';
import localStogeAdapter from '../../_utils/localStorage';
import RouterURL from '../consts';
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
            localStogeAdapter.setItemJson('memToken', 'admin');
            yield put(loginSuccess('admin', 'Success'));
        } else {
            yield put(routerNotFull());

            localStogeAdapter.setItemJson('memToken', '123');
            yield put(loginSuccess('123', 'Success'));
        }
        yield put(loadingClose());

        history.push(RouterURL.dashboard);
    }
}

function* logout() {
    while (true) {
        yield take(nameConst.ACC_LOGOUT);
        yield put(loadingOpen());
        yield delay(1000);

        localStogeAdapter.removeItem('memToken');
        yield put(logoutSuccess());
        yield put(loadingClose());

        // history.push(RouterURL.signin);
        window.location.href = RouterURL.signin;
    }
}

export default function* root() {
    yield fork(login);
    yield fork(logout);
}
