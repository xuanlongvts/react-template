'use strict';

const cart = 'cart';

export default {
    set cart(cart) {
        localStorage.setItem(cart, cart);
    },

    get cart() {
        const cartCurr = localStorage.getItem(cart);
        return cartCurr ? cartCurr : null;
    }
};
