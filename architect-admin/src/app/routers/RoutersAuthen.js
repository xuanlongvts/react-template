import React, { lazy } from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

import { RouterAuthen } from './consts';
import AsyncComponent from '../components/_asynComponent';

import SubCompIndex from '../components/subNav';
import SubComp1 from '../components/subNav/sub1';
import SubComp2 from '../components/subNav/sub2';
import SubComp3 from '../components/subNav/sub3';
import SubComp3_1 from '../components/subNav/sub3_1';
import SubComp3_2 from '../components/subNav/sub3_2';

const AsyncAbout = AsyncComponent(lazy(() => import('../components/About')));
const AsyncCatagories = AsyncComponent(lazy(() => import('../components/Categories')));
// const AsyncSubNav = AsyncComponent(lazy(() => import('../components/subNav')));
const AsyncProducts = AsyncComponent(lazy(() => import('../components/products')));
const AsyncMyComApi = AsyncComponent(lazy(() => import('../components/redditApi')));

const AsyncDashboard = AsyncComponent(lazy(() => import('../components/dashboard')));

const routersAuthen = [
    {
        title: 'Home',
        path: RouterAuthen.home,
        component: AsyncDashboard,
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        title: 'About',
        path: RouterAuthen.about,
        component: AsyncAbout,
        icon: <ShoppingCartIcon />,
    },
    {
        title: 'Categories',
        path: RouterAuthen.categories,
        component: AsyncCatagories,
        icon: <PeopleIcon />,
    },
    {
        title: 'Sub nav',
        path: RouterAuthen.subnav,
        component: SubCompIndex,
        icon: <BarChartIcon />,
        sub: [
            {
                title: 'Sub 1',
                path: RouterAuthen.subnav1,
                component: SubComp1,
                icon: <LayersIcon />,
            },
            {
                title: 'Sub 2',
                path: RouterAuthen.subnav2,
                component: SubComp2,
                icon: <LayersIcon />,
            },
            {
                title: 'Sub 3',
                path: RouterAuthen.subnav3,
                component: SubComp3,
                icon: <LayersIcon />,
                sub: [
                    {
                        title: 'Sub 3 1',
                        path: RouterAuthen.subnav3_nav1,
                        component: SubComp3_1,
                        icon: <LayersIcon />,
                    },
                    {
                        title: 'Sub 3 2',
                        path: RouterAuthen.subnav3_nav2,
                        component: SubComp3_2,
                        icon: <LayersIcon />,
                    },
                ],
            },
        ],
    },
    {
        title: 'Products',
        path: RouterAuthen.products,
        component: AsyncProducts,
        icon: <LayersIcon />,
    },
    {
        title: 'Reddit api',
        path: RouterAuthen.apireddit,
        component: AsyncMyComApi,
        icon: <LayersIcon />,
    },
];

export default routersAuthen;
