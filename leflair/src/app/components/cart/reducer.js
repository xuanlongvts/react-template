import { fromJS } from 'immutable';
import * as actList from './consts';
import localStogeAdapter from '../../_utils/localStorage';

const initialState = fromJS({
    carts: {
        listCarts: localStogeAdapter.getItemJson('carts') || [],
        quantityTotal: parseInt(localStogeAdapter.getItem('quantity'), 10) || 0
    },
    isOpen: false
});

const cart = (state = initialState, action) => {
    let quantity = state.getIn(['carts', 'quantityTotal']);

    switch (action.type) {
        case actList.OPEN_CART:
            return state.set('isOpen', true);
        case actList.CLOSE_CART:
            return state.set('isOpen', false);
        case actList.ADD_TO_CART:
            return state
                .setIn(['carts', 'listCarts'], state.getIn(['carts', 'listCarts']).concat(action.cart))
                .setIn(['carts', 'quantityTotal'], ++quantity);
        case actList.UPDATE_CART_ONE:
            var cartUpdate = localStogeAdapter.getItemJson('carts')[action.index] || state.getIn(['carts', 'listCarts', action.index]);
            cartUpdate.quantity = action.unit + cartUpdate.quantity;
            cartUpdate.stockLeft = cartUpdate.stockLeft - action.stock;
            return state.setIn(['carts', 'listCarts', action.index], cartUpdate).setIn(['carts', 'quantityTotal'], action.unit + quantity);
        default:
            return state;
    }
};

export default cart;
