import { fromJS } from 'immutable';
import { COMMON_MODAL_OPEN, COMMON_MODAL_CLOSE } from './consts';

const initialState = fromJS({
    isOpenModal: false,
    title: null,
    content: null,
    btnClose: null,
    btnAccept: null
});

const loading = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_MODAL_OPEN:
            return state
                .set('isOpenModal', action.isOpenModal)
                .set('title', action.title)
                .set('content', action.content)
                .set('btnClose', action.btnClose)
                .set('btnAccept', action.btnAccept);
        case COMMON_MODAL_CLOSE:
            return state.set('isOpenModal', action.isOpenModal);
        default:
            return state;
    }
};

export default loading;
