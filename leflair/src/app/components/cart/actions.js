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

export const updateCartItemOne = (unit, stock, index) => {
    return {
        type: actList.UPDATE_CART_ONE,
        unit,
        stock,
        index
    };
};
