import { COMMON_LOADING_OPEN, COMMON_LOADING_CLOSE } from './const';

export const loadingOpen = () => {
    return {
        type: COMMON_LOADING_OPEN,
        isLoading: true,
    };
};

export const loadingClose = () => {
    return {
        type: COMMON_LOADING_CLOSE,
        isLoading: false,
    };
};
