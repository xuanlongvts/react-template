'use strict';

import * as actList from './consts';

export const requestAddToCart = cart => {
    return {
        type: actList.REQUEST_ADD_TO_CART,
        cart
    };
};

export const getCart = () => {
    return {};
};

export const addToCartNew = cart => {
    return {
        type: actList.ADD_TO_CART,
        cart
    };
};

export const deleteCartItem = id => {
    return {};
};

export const updateCartItemOne = (unit, index) => {
    return {
        type: actList.UPDATE_CART_ONE,
        unit,
        index
    };
};
