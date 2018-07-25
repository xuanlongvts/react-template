import asyncComponent from '../components/_asynComponent';

// import AsyncHome from '../components/home';
// import AsyncPoducts from '../components/products';
// import AsyncNews from '../components/news';
// import AsyncTeam from '../components/team';
// import AsyncCareers from '../components/careers';
// import AsyncFaq from '../components/faq';

const AsyncHome = asyncComponent(() => import('../components/home/'));
const AsyncProducts = asyncComponent(() => import('../components/products/'));
const AsyncCart = asyncComponent(() => import('../components/cart/'));
const AsyncAbout = asyncComponent(() => import('../components/about/'));

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
        title: 'About',
        path: '/about',
        component: AsyncAbout
    },
    {
        title: 'Your cart',
        path: '/cart',
        component: AsyncCart
    }
];

export default routersAuthen;
