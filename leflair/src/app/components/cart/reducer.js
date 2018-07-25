import { fromJS } from 'immutable';
import * as actList from './consts';

const initialState = fromJS({
    carts: {
        listCarts: [],
        quantityTotal: 0
    }
});

const cart = (state = initialState, action) => {
    let quantity = state.getIn(['carts', 'quantityTotal']);

    switch (action.type) {
        case actList.ADD_TO_CART:
            return state
                .setIn(['carts', 'listCarts'], state.getIn(['carts', 'listCarts']).concat(action.cart))
                .setIn(['carts', 'quantityTotal'], ++quantity);
        case actList.UPDATE_CART_ONE:
            var cartUpdate = state.getIn(['carts', 'listCarts', action.index]);
            cartUpdate.quantity = action.unit + cartUpdate.quantity;
            cartUpdate.stockLeft = cartUpdate.stockLeft - action.stock;
            return state.setIn(['carts', 'listCarts', action.index], cartUpdate).setIn(['carts', 'quantityTotal'], action.unit + quantity);
        default:
            return state;
    }
};

export default cart;
