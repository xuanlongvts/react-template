import { lazy } from 'react';

import AsyncComponent from '../components/_asynComponent';

const AsyncHome = AsyncComponent(lazy(() => import('../components/Home')));
const AsyncAbout = AsyncComponent(lazy(() => import('../components/About')));
const AsyncCatagories = AsyncComponent(lazy(() => import('../components/Categories')));
const AsyncProducts = AsyncComponent(lazy(() => import('../components/Products')));
const AsyncMyComApi = AsyncComponent(lazy(() => import('../components/myComApi')));

const routersAuthen = [
    {
        title: 'Home',
        path: '/',
        component: AsyncHome,
        exact: true,
    },
    {
        title: 'About',
        path: '/about',
        component: AsyncAbout,
    },
    {
        title: 'Categories',
        path: '/categories',
        component: AsyncCatagories,
    },
    {
        title: 'Products',
        path: '/products',
        component: AsyncProducts,
    },
    {
        title: 'Reddit api',
        path: '/mycomapi',
        component: AsyncMyComApi,
    },
];

export default routersAuthen;
