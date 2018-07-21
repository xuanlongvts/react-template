import { fromJS } from 'immutable';
import { REQUEST_EMAIL_SUCCESS, REQUEST_EMAIL_ERROR, MODAL_MESS_CLOSE } from './consts';

const initialState = fromJS({
    dataSuccess: null,
    errMess: null,
    isError: false,
    openModal: false
});

const homeEmail = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EMAIL_SUCCESS:
            return state
                .set('dataSuccess', action.dataSuccess)
                .set('isError', false)
                .set('openModal', true);
        case REQUEST_EMAIL_ERROR:
            return state
                .set('errMess', action.errMess)
                .set('isError', true)
                .set('openModal', true);
        case MODAL_MESS_CLOSE:
            return state
                .set('errMess', null)
                .set('dataSuccess', null)
                .set('isError', false)
                .set('openModal', false);
        default:
            return state;
    }
};

export default homeEmail;
