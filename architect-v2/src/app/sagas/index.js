import { all, fork } from 'redux-saga/effects';

import redditApiSaga from '../components/redditApi/saga';

export default function* rootSaga() {
    yield all([fork(redditApiSaga)]);
}
