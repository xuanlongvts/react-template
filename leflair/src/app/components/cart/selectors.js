export const getCarts = state => state.reducCart.getIn(['carts', 'listCarts']);
export const getQuantity = state => state.reducCart.getIn(['carts', 'quantityTotal']);
