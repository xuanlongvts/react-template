import * as nameConst from './const';

export const loginCall = inforAcc => {
    return {
        type: nameConst.ACC_LOGIN,
        inforAcc,
    };
};
export const loginFaile = errMess => {
    return {
        type: nameConst.ACC_LOGIN_FAILE,
        errMess,
    };
};
export const loginSuccess = (memToken, succMess) => {
    return {
        type: nameConst.ACC_LOGIN_SUCCESS,
        memToken,
        succMess,
    };
};
// End login

export const registerCall = inforAcc => {
    return {
        type: nameConst.ACC_REGISTER,
        inforAcc,
    };
};
export const registerFaile = errMess => {
    return {
        type: nameConst.ACC_REGISTER_FAILE,
        errMess,
    };
};
export const registerSuccess = (memToken, succMess) => {
    return {
        type: nameConst.ACC_REGISTER_SUCCESS,
        memToken,
        succMess,
    };
};
// End register

export const logoutCall = () => {
    return {
        type: nameConst.ACC_LOGOUT,
    };
};
export const logoutSuccess = () => {
    return {
        type: nameConst.ACC_LOGOUT_SUCCESS,
    };
};
export const logoutFaile = errMess => {
    return {
        type: nameConst.ACC_LOGOUT_FAILE,
        errMess,
    };
};
// End logout

export const getInforUserFaile = errMess => {
    return {
        type: nameConst.ACC_GET_INFOR_USER_FAILE,
        errMess,
    };
};
export const getInforUserSuccess = inforUser => {
    return {
        type: nameConst.ACC_GET_INFOR_USER_SUCCESS,
        inforUser,
    };
};
// End get infor user

export const updateProfileCall = inforAcc => {
    return {
        type: nameConst.ACC_UPDATE_PROFILE,
        inforAcc,
    };
};
export const updateProfileFaile = errMess => {
    return {
        type: nameConst.ACC_UPDATE_PROFILE_FAILE,
        errMess,
    };
};
export const updateProfileSuccess = succMess => {
    return {
        type: nameConst.ACC_UPDATE_PROFILE_SUCCESS,
        succMess,
    };
};
// End update profile

export const forgotPassCall = inforAcc => {
    return {
        type: nameConst.ACC_FORGOT_PASS,
        inforAcc,
    };
};
export const forgotPassFaile = errMess => {
    return {
        type: nameConst.ACC_FORGOT_PASS_FAILE,
        errMess,
    };
};
export const forgotPassSuccess = succMess => {
    return {
        type: nameConst.ACC_FORGOT_PASS_SUCCESS,
        succMess,
    };
};
// End forgot password

export const accErrResetMess = () => {
    return {
        type: nameConst.ACC_ERR_RESET,
    };
};
// End account reset mess error

// ================================================ TMP  Remove later
export const routerFull = () => {
    return {
        type: nameConst.AUTHEN_FULL,
        isRouterFull: true,
    };
};
export const routerNotFull = () => {
    return {
        type: nameConst.AUTHEN_NOT_FULL,
        isRouterFull: false,
    };
};
