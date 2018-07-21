import { all, fork } from 'redux-saga/effects';

import subscribeEmail from '../components/home/saga';
import subscribeNews from '../components/news/saga';
import subscribeLanguage from '../_utils/languages/saga';

export default function* rootSaga() {
    yield all([fork(subscribeEmail), fork(subscribeNews), fork(subscribeLanguage)]);
}
