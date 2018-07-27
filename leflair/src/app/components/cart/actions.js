import * as actList from './consts';

export const openCart = () => {
    return {
        type: actList.OPEN_CART
    };
};

export const closeCart = () => {
    return {
        type: actList.CLOSE_CART
    };
};

export const requestAddToCart = cart => {
    return {
        type: actList.REQUEST_ADD_TO_CART,
        cart
    };
};

export const addToCartNew = cart => {
    return {
        type: actList.ADD_TO_CART,
        cart
    };
};

export const deleteCartItem = index => {
    return {
        type: actList.DELETE_CART,
        index
    };
};

export const updateCartItemOne = (unit, stock, index) => {
    return {
        type: actList.UPDATE_CART_ONE,
        unit,
        stock,
        index
    };
};

export const updateCartItemMulti = (unit, index) => {
    return {
        type: actList.UPDATE_CART_MULTI,
        unit,
        index
    };
};

export const cartPay = () => {
    return {
        type: actList.CART_PAY
    };
};

export const cartRemove = () => {
    return {
        type: actList.CART_REMOVE
    };
};
