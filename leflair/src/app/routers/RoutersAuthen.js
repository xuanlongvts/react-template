import AsyncHome from '../components/home';
import AsyncProducts from '../components/products';

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
        title: 'Your cart',
        path: '/cart',
        component: () => {}
    }
];

export default routersAuthen;
