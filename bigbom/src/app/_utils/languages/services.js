const language = 'language';

export default {
    set language(lang) {
        localStorage.setItem(language, lang);
    },

    get language() {
        const langCurr = localStorage.getItem(language);
        return langCurr ? langCurr : null;
    }
};
