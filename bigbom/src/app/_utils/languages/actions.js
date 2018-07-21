import { GET_LANGUAGES, SET_LANGUAGES } from './consts';

export const getLanguage = () => {
    return {
        type: GET_LANGUAGES
    };
};

export const setLanguage = lang => {
    return {
        type: SET_LANGUAGES,
        lang
    };
};
