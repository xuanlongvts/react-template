import { all, put, take, fork, select } from 'redux-saga/effects';
import _ from 'lodash';

import * as actName from './consts';
import * as actList from './actions';
import { loadingClose } from '../_base/loading/actions';
import { modalOpen } from '../_base/modal/actions';

import { getCarts } from './selectors';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* cartPay() {
    while (true) {
        yield take(actName.CART_PAY);
        yield delay(1000);
        yield put(loadingClose());
        const modalType = {
            title: 'Confirm',
            content: 'Thanks you',
            btnClose: 'Close',
            btnAccept: null
        };
        yield put(modalOpen(modalType));
    }
}

function* addToCart() {
    while (true) {
        const { cart } = yield take(actName.REQUEST_ADD_TO_CART);
        let getCartsStatus = yield select(getCarts);

        if (_.isEmpty(getCartsStatus)) {
            yield put(actList.addToCartNew(cart));
        } else {
            let cartIndex = getCartsStatus.findIndex(eactItem => {
                if (eactItem.id === cart.id) {
                    return true;
                }

                return false;
            });
            if (cartIndex === -1) {
                yield put(actList.addToCartNew(cart));
            } else {
                yield put(actList.updateCartItemOne(cart.quantity, 1, cartIndex));
            }
        }
    }
}

export default function* root() {
    yield all([fork(addToCart), fork(cartPay)]);
}
