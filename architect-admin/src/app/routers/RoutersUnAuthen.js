import Login from './account/comp/login';
import ResetPass from './account/comp/resetPass';
import SignUp from './account/comp/signUp';

const routersUnAuthen = [
    {
        title: 'Sing in',
        path: '/',
        component: Login,
        exact: true,
    },
    {
        title: 'Sign up',
        path: '/signup',
        component: SignUp,
    },
    {
        title: 'Reset pass',
        path: '/resetpass',
        component: ResetPass,
    },
];

export default routersUnAuthen;
