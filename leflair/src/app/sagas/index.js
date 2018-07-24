import { all, fork } from 'redux-saga/effects';

import subscribeCart from '../components/cart/saga';

export default function* rootSaga() {
    yield all([fork(subscribeCart)]);
}
