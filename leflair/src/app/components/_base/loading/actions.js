import { COMMON_LOADING_OPEN, COMMON_LOADING_CLOSE } from './consts';

export const loadingOpen = () => {
    return {
        type: COMMON_LOADING_OPEN,
        isLoading: true
    };
};

export const loadingClose = () => {
    return {
        type: COMMON_LOADING_CLOSE,
        isLoading: false
    };
};
