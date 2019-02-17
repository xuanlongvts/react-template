import { RouterUnAuthen } from './consts';
import Login from './account/compLogin';
import ResetPass from './account/compResetPass';
import SignUp from './account/compSignUp';

const routersUnAuthen = [
    {
        title: 'Sing in',
        path: RouterUnAuthen.signin,
        component: Login,
        exact: true,
    },
    {
        title: 'Sign up',
        path: RouterUnAuthen.signup,
        component: SignUp,
    },
    {
        title: 'Reset pass',
        path: RouterUnAuthen.resetpass,
        component: ResetPass,
    },
];

export default routersUnAuthen;
