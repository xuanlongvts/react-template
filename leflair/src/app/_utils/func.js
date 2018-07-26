import $ from 'jquery';

export const iphone = 375;
export const iphonePlus = 414;
export const phone = 576;
export const tablet = 768;
export const desktop = 992;
export const wideDesktop = 1200;

export const isDesktop = () => {
    return $(window).width() >= desktop ? true : false;
};

export const isWideDesktop = () => {
    return $(window).width() >= wideDesktop ? true : false;
};

export const totalQuantity = carts => {
    let totalNumber = 0;
    carts.map(item => {
        totalNumber += item.quantity;
        return null;
    });

    return totalNumber;
};
