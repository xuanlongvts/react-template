import { lazy } from 'react';

import RouterMain from './consts';
import AsyncComponent from '../components/_asynComponent';

import SubCompIndex from '../components/subNav';
import SubComp1 from '../components/subNav/sub1';
import SubComp2 from '../components/subNav/sub2';
import SubComp3 from '../components/subNav/sub3';
import SubComp3_1 from '../components/subNav/sub3_1';
import SubComp3_2 from '../components/subNav/sub3_2';

const AsyncHome = AsyncComponent(lazy(() => import('../components/Home')));
const AsyncAbout = AsyncComponent(lazy(() => import('../components/About')));
const AsyncCatagories = AsyncComponent(lazy(() => import('../components/Categories')));
// const AsyncSubNav = AsyncComponent(lazy(() => import('../components/subNav')));
const AsyncProducts = AsyncComponent(lazy(() => import('../components/products/')));
const AsyncMyComApi = AsyncComponent(lazy(() => import('../components/redditApi')));

const routersAuthen = [
    {
        title: 'Home',
        path: RouterMain.home,
        component: AsyncHome,
        exact: true,
    },
    {
        title: 'About',
        path: RouterMain.about,
        component: AsyncAbout,
    },
    {
        title: 'Categories',
        path: RouterMain.categories,
        component: AsyncCatagories,
    },
    {
        title: 'Sub nav',
        path: RouterMain.subnav,
        component: SubCompIndex,
        sub: [
            {
                title: 'Sub 1',
                path: RouterMain.subnav1,
                component: SubComp1,
            },
            {
                title: 'Sub 2',
                path: RouterMain.subnav2,
                component: SubComp2,
            },
            {
                title: 'Sub 3',
                path: RouterMain.subnav3,
                component: SubComp3,
                sub: [
                    {
                        title: 'Sub 3 1',
                        path: RouterMain.subnav3_nav1,
                        component: SubComp3_1,
                    },
                    {
                        title: 'Sub 3 2',
                        path: RouterMain.subnav3_nav2,
                        component: SubComp3_2,
                    },
                ],
            },
        ],
    },
    {
        title: 'Products',
        path: RouterMain.products,
        component: AsyncProducts,
    },
    {
        title: 'Reddit api',
        path: RouterMain.apireddit,
        component: AsyncMyComApi,
    },
];

export default routersAuthen;
