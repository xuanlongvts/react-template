import { take, call, fork, put } from 'redux-saga/effects';
import _ from 'lodash';
import CountryLanguage from 'country-language';
import API from '../../_services/api';

import languageAdapter from './services';
import { setLanguage } from './actions';
import { GET_LANGUAGES, APP_LOCALES, DEFAULT_LANG } from './consts';

const checkLocalLanguage = () => {
    const restApi = new API();
    const path = 'http://ip-api.com/json';

    return restApi
        .fetchCrossDomain(path)
        .then(res => {
            return res.data.countryCode.toLowerCase();
        })
        .catch(error => {
            throw error;
        });
};

function* getDefaultLanguage() {
    let ipLang = null;
    try {
        yield take(GET_LANGUAGES);
        if (languageAdapter.language) {
            ipLang = languageAdapter.language;
        } else {
            const result = yield call(checkLocalLanguage);
            CountryLanguage.getCountryLanguages(result, (err, languages) => {
                if (err) {
                    languageAdapter.language = getBrowserLanguage();
                } else {
                    // languages.map(languageCodes => {
                    //     const isExisted = _.find(
                    //         APP_LOCALES,
                    //         locale => locale.code === languageCodes.iso639_1.toLowerCase()
                    //     );
                    //     isExisted && (ipLang = isExisted.code);
                    // });
                    const languageCodes = languages[0].iso639_1.toLowerCase();
                    const isExisted = APP_LOCALES.filter(locale => locale.code === languageCodes);
                    isExisted && (ipLang = isExisted[0].code);
                }
            });

            ipLang = ipLang ? ipLang : getBrowserLanguage();
        }

        yield put(setLanguage(ipLang));
        languageAdapter.language = ipLang;
    } catch (err) {
        yield put(setLanguage(getBrowserLanguage()));
        languageAdapter.language = getBrowserLanguage();
    }
}

const getBrowserLanguage = () => {
    const browserLang = window.navigator.language && window.navigator.language.split('-')[0];
    const isExisted = browserLang
        ? _.find(APP_LOCALES, locale => locale.code === browserLang.toLowerCase())
        : DEFAULT_LANG;
    return isExisted.code;
};

export default function* root() {
    yield fork(getDefaultLanguage);
}
