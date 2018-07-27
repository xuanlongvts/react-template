import { fromJS } from 'immutable';
import * as actList from './consts';
import localStogeAdapter from '../../_utils/localStorage';

const initialState = fromJS({
    carts: {
        listCarts: localStogeAdapter.getItemJson('carts') || []
    },
    isOpen: false
});

const cart = (state = initialState, action) => {
    switch (action.type) {
        case actList.OPEN_CART:
            return state.set('isOpen', true);
        case actList.CLOSE_CART:
            return state.set('isOpen', false);
        case actList.ADD_TO_CART:
            return state.setIn(['carts', 'listCarts'], state.getIn(['carts', 'listCarts']).concat(action.cart));
        case actList.UPDATE_CART_ONE:
            var cartUpdate = localStogeAdapter.getItemJson('carts')[action.index] || state.getIn(['carts', 'listCarts', action.index]);
            cartUpdate.quantity = action.unit + cartUpdate.quantity;
            return state.setIn(['carts', 'listCarts', action.index], cartUpdate);
        case actList.UPDATE_CART_MULTI:
            cartUpdate = localStogeAdapter.getItemJson('carts')[action.index] || state.getIn(['carts', 'listCarts', action.index]);
            cartUpdate.quantity = parseInt(action.unit, 10);
            return state.setIn(['carts', 'listCarts', action.index], cartUpdate);
        case actList.DELETE_CART:
            return state.deleteIn(['carts', 'listCarts', action.index]);
        case actList.CART_REMOVE:
            return state.setIn(['carts', 'listCarts'], initialState.getIn(['carts', 'listCarts']));
        default:
            return state;
    }
};

export default cart;
