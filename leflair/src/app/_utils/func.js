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

export const addDots = nStr => {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
};
