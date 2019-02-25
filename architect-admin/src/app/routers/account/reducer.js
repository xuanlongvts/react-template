import { fromJS } from 'immutable';

import * as nameConst from './const';

const initState = fromJS({
    errMess: null,
    memToken: '123',
    inforUser: null,
    isRouterFull: false, // tmp remove later
});

const reducerAccount = (state = initState, action) => {
    switch (action.type) {
        case nameConst.ACC_LOGIN_FAILE:
            return state
                .set('errMess', action.errMess)
                .set('memToken', initState.get('memToken'))
                .set('inforUser', initState.get('inforUser'));
        case nameConst.ACC_GET_INFOR_USER_SUCCESS:
            return state.set('errMess', initState.get('errMess')).set('inforUser', action.inforUser);
        case nameConst.ACC_ERR_RESET:
            return state.set('errMess', initState.get('errMess'));
        case nameConst.ACC_LOGIN_SUCCESS:
        case nameConst.ACC_REGISTER_SUCCESS:
            return state.set('errMess', initState.get('errMess')).set('memToken', action.memToken);
        case nameConst.ACC_UPDATE_PROFILE_FAILE:
        case nameConst.ACC_REGISTER_FAILE:
            return state.set('errMess', action.errMess);
        case nameConst.ACC_LOGOUT_SUCCESS:
            return state
                .set('memToken', initState.get('memToken'))
                .set('inforUser', initState.get('inforUser'))
                .set('errMess', initState.get('errMess'));
        case nameConst.ACC_LOGOUT_FAILE:
            return state.set('errMess', action.errMess);

        // tmp remove later
        case nameConst.AUTHEN_FULL:
        case nameConst.AUTHEN_NOT_FULL:
            return state.set('isRouterFull', action.isRouterFull);

        default:
            return state;
    }
};

export default reducerAccount;
