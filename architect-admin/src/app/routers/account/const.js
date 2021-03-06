import { NAMESPACE_ACCOUNT } from '../../consts';

export const ACC_LOGIN = `${NAMESPACE_ACCOUNT}ACC_LOGIN`;
export const ACC_LOGIN_FAILE = `${NAMESPACE_ACCOUNT}ACC_LOGIN_FAILE`;
export const ACC_LOGIN_SUCCESS = `${NAMESPACE_ACCOUNT}ACC_LOGIN_SUCCESS`;

export const ACC_LOGOUT = `${NAMESPACE_ACCOUNT}ACC_LOGOUT`;
export const ACC_LOGOUT_FAILE = `${NAMESPACE_ACCOUNT}ACC_LOGOUT_FAILE`;
export const ACC_LOGOUT_SUCCESS = `${NAMESPACE_ACCOUNT}ACC_LOGOUT_SUCCESS`;

export const ACC_GET_INFOR_USER_FAILE = `${NAMESPACE_ACCOUNT}ACC_GET_INFOR_USER_FAILE`;
export const ACC_GET_INFOR_USER_SUCCESS = `${NAMESPACE_ACCOUNT}ACC_GET_INFOR_USER_SUCCESS`;

export const ACC_UPDATE_PROFILE = `${NAMESPACE_ACCOUNT}ACC_UPDATE_PROFILE`;
export const ACC_UPDATE_PROFILE_FAILE = `${NAMESPACE_ACCOUNT}ACC_UPDATE_PROFILE_FAILE`;
export const ACC_UPDATE_PROFILE_SUCCESS = `${NAMESPACE_ACCOUNT}ACC_UPDATE_PROFILE_SUCCESS`;

export const ACC_REGISTER = `${NAMESPACE_ACCOUNT}ACC_REGISTER`;
export const ACC_REGISTER_FAILE = `${NAMESPACE_ACCOUNT}ACC_REGISTER_FAILE`;
export const ACC_REGISTER_SUCCESS = `${NAMESPACE_ACCOUNT}ACC_REGISTER_SUCCESS`;

export const ACC_FORGOT_PASS = `${NAMESPACE_ACCOUNT}ACC_FORGOT_PASS`;
export const ACC_FORGOT_PASS_FAILE = `${NAMESPACE_ACCOUNT}ACC_FORGOT_PASS_FAILE`;
export const ACC_FORGOT_PASS_SUCCESS = `${NAMESPACE_ACCOUNT}ACC_FORGOT_PASS_SUCCESS`;

export const ACC_ERR_RESET = `${NAMESPACE_ACCOUNT}ACC_ERR_RESET`;

export const messAcc = {
    loginSucc: 'Login account success',
    registerSucc: 'Register account success',
    updateSucc: 'Update account success',
    resetSucc: 'Reset password success',
};

// ================================================ TMP  Remove later
export const AUTHEN_FULL = `${NAMESPACE_ACCOUNT}AUTHEN_FULL`;
export const AUTHEN_NOT_FULL = `${NAMESPACE_ACCOUNT}AUTHEN_NOT_FULL`;
