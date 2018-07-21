import asyncComponent from '../components/_asynComponent';

// import AsyncHome from '../components/home';
// import AsyncPoducts from '../components/products';
// import AsyncNews from '../components/news';
// import AsyncTeam from '../components/team';
// import AsyncCareers from '../components/careers';
// import AsyncFaq from '../components/faq';

const AsyncHome = asyncComponent(() => import('../components/home/'));
const AsyncNews = asyncComponent(() => import('../components/news/'));
const AsyncTeam = asyncComponent(() => import('../components/team/'));
const AsyncCareers = asyncComponent(() => import('../components/careers/'));
const AsyncFaq = asyncComponent(() => import('../components/faq/'));

export const page_home = 'home';
export const page_news = 'news';
export const page_whitepaper = 'whitepaper';
export const page_team = 'team';
export const page_careers = 'careers';
export const page_faq = 'faq';

const routersAuthen = [
    {
        title: 'Home',
        path: '/',
        component: AsyncHome,
        exact: true
    },
    {
        title: 'News',
        path: `/${page_news}`,
        component: AsyncNews
    },
    {
        title: 'Whitepaper',
        path: `/${page_whitepaper}`,
        component: () => null
    },
    {
        title: 'Team',
        path: `/${page_team}`,
        component: AsyncTeam
    },
    {
        title: 'Careers',
        path: `/${page_careers}`,
        component: AsyncCareers
    },
    {
        title: 'FAQ',
        path: `/${page_faq}`,
        component: AsyncFaq
    }
];

export default routersAuthen;
