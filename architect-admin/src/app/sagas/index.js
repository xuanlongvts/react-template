import { all, fork } from 'redux-saga/effects';

import redditApiSaga from '../components/redditApi/saga';
import accApiSaga from '../routers/account/saga';

export default function* rootSaga() {
    yield all([fork(redditApiSaga), fork(accApiSaga)]);
}
