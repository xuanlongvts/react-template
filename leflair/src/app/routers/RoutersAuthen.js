import asyncComponent from '../components/_asynComponent';

// import AsyncHome from '../components/home';
// import AsyncProducts from '../components/products';
// import AsyncCheckout from '../components/checkout';

const AsyncHome = asyncComponent(() => import('../components/home/'));
const AsyncProducts = asyncComponent(() => import('../components/products/'));
const AsyncCheckout = asyncComponent(() => import('../components/checkout/'));

const routersAuthen = [
    {
        title: 'Home',
        path: '/',
        component: AsyncHome,
        exact: true
    },
    {
        title: 'Products',
        path: '/products',
        component: AsyncProducts
    },
    {
        title: 'Checkout',
        path: '/checkout',
        component: AsyncCheckout,
        isNotMenu: true
    },
    {
        title: 'Your cart',
        path: '/cart',
        component: () => {}
    }
];

export default routersAuthen;
