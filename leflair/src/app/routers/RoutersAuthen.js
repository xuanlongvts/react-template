import AsyncHome from '../components/home';
import AsyncProducts from '../components/products';
import AsyncCheckout from '../components/checkout';

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
