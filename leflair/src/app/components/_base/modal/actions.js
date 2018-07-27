import { COMMON_MODAL_OPEN, COMMON_MODAL_CLOSE } from './consts';

export const modalOpen = ({ title, content, btnClose, btnAccept }) => {
    return {
        type: COMMON_MODAL_OPEN,
        isOpenModal: true,
        title,
        content,
        btnClose,
        btnAccept
    };
};

export const modalClose = () => {
    return {
        type: COMMON_MODAL_CLOSE,
        isOpenModal: false
    };
};
