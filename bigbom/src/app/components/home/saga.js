import { put, take, call, fork } from 'redux-saga/effects';

import API from '../../_services/api';
import { hanleEmailSuccess, hanleEmailError } from './actions';
import { loadingOpen, loadingClose } from '../_base/loading/actions';
import * as nameActList from './consts';

const registerEmail = email => {
    const restApi = new API();
    const path = '/subscriptions';
    const payload = {
        email
    };
    return restApi
        .post({ path, payload })
        .then(res => {
            return {
                dataSuccess: res.data
            };
        })
        .catch(err => {
            const convJson = JSON.stringify(err);
            const jsnParse = JSON.parse(convJson);
            const getErrMess = jsnParse.response.data.message;

            return {
                dataErr: getErrMess
            };
        });
};

function* requestEmail() {
    while (true) {
        const { email } = yield take(nameActList.REQUEST_EMAIL);
        yield put(loadingOpen());
        const result = yield call(registerEmail, email);
        yield put(loadingClose());
        result.dataSuccess
            ? yield put(hanleEmailSuccess(result.dataSuccess))
            : yield put(hanleEmailError(result.dataErr));
    }
}

export default function* root() {
    yield fork(requestEmail);
}
