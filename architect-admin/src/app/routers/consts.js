const home = '/';
const about = '/about';
const categories = '/categories';
const products = '/products';
const apireddit = '/apireddit';

const subnav = '/subnav';
const subnav1 = `${subnav}/sub1`;
const subnav2 = `${subnav}/sub2`;
const subnav3 = `${subnav}/sub3`;
const subnav3_nav1 = `${subnav3}/nav1`;
const subnav3_nav2 = `${subnav3}/nav2`;

export const RouterAuthen = {
    home: home,
    about: about,
    categories: categories,
    products: products,
    apireddit: apireddit,

    subnav: subnav,
    subnav1: subnav1,
    subnav2: subnav2,
    subnav3: subnav3,
    subnav3_nav1: subnav3_nav1,
    subnav3_nav2: subnav3_nav2,
};

const signup = '/signup';
const resetpass = '/resetpass';
export const RouterUnAuthen = {
    signin: home,
    signup,
    resetpass,
};
