import React, { lazy } from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Send from '@material-ui/icons/Send';
import SelectAll from '@material-ui/icons/SelectAll';
import Markunread from '@material-ui/icons/Markunread';
import NextWeek from '@material-ui/icons/NextWeek';
import FontDownload from '@material-ui/icons/FontDownload';
import Inbox from '@material-ui/icons/Inbox';

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

export const nameRouterApiFull = [
    'home',
    'about',
    'categories',
    'subNav',
    'sub1',
    'sub2',
    'sub3',
    'sub3_1',
    'sub3_2',
    'products',
    'redditApi',
];
export const nameRouterApi = ['home', 'about', 'subNav', 'sub3', 'sub3_2', 'redditApi'];

const nameRouter = {
    home: 'home',
    about: 'about',
    categories: 'categories',
    subNav: 'subNav',
    sub1: 'sub1',
    sub2: 'sub2',
    sub3: 'sub3',
    sub3_1: 'sub3_1',
    sub3_2: 'sub3_2',
    products: 'products',
    redditApi: 'redditApi',
};
const routersAuthen = [
    {
        title: 'Home',
        name: nameRouter.home,
        path: RouterAuthen.home,
        component: AsyncDashboard,
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        title: 'About',
        name: nameRouter.about,
        path: RouterAuthen.about,
        component: AsyncAbout,
        icon: <ShoppingCartIcon />,
    },
    {
        title: 'Categories',
        name: nameRouter.categories,
        path: RouterAuthen.categories,
        component: AsyncCatagories,
        icon: <PeopleIcon />,
    },
    {
        title: 'Sub nav',
        name: nameRouter.subNav,
        path: RouterAuthen.subnav,
        component: SubCompIndex,
        icon: <BarChartIcon />,
        sub: [
            {
                title: 'Sub 1',
                name: nameRouter.sub1,
                path: RouterAuthen.subnav1,
                component: SubComp1,
                icon: <LayersIcon />,
            },
            {
                title: 'Sub 2',
                name: nameRouter.sub2,
                path: RouterAuthen.subnav2,
                component: SubComp2,
                icon: <FontDownload />,
            },
            {
                title: 'Sub 3',
                name: nameRouter.sub3,
                path: RouterAuthen.subnav3,
                component: SubComp3,
                icon: <NextWeek />,
                sub: [
                    {
                        title: 'Sub 3 1',
                        name: nameRouter.sub3_1,
                        path: RouterAuthen.subnav3_nav1,
                        component: SubComp3_1,
                        icon: <Markunread />,
                    },
                    {
                        title: 'Sub 3 2',
                        name: nameRouter.sub3_2,
                        path: RouterAuthen.subnav3_nav2,
                        component: SubComp3_2,
                        icon: <Inbox />,
                    },
                ],
            },
        ],
    },
    {
        title: 'Products',
        name: nameRouter.products,
        path: RouterAuthen.products,
        component: AsyncProducts,
        icon: <SelectAll />,
    },
    {
        title: 'Reddit api',
        name: nameRouter.redditApi,
        path: RouterAuthen.apireddit,
        component: AsyncMyComApi,
        icon: <Send />,
    },
];

export default routersAuthen;
