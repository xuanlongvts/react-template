import { REQUEST_EMAIL, REQUEST_EMAIL_SUCCESS, REQUEST_EMAIL_ERROR, MODAL_MESS_CLOSE } from './consts';

export const hanleEmailSent = email => {
    return {
        type: REQUEST_EMAIL,
        email
    };
};

export const hanleEmailSuccess = data => {
    return {
        type: REQUEST_EMAIL_SUCCESS,
        dataSuccess: data
    };
};

export const hanleEmailError = errMess => {
    return {
        type: REQUEST_EMAIL_ERROR,
        errMess
    };
};

export const modalMessClose = () => {
    return {
        type: MODAL_MESS_CLOSE
    };
};
