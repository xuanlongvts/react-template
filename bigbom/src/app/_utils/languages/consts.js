import { NAMESPACE_COMMON } from '../../consts';

import English from '../../../images/languages/united-states.png';
import VietName from '../../../images/languages/vietnam.png';
import Chinese from '../../../images/languages/china.png';
import Korean from '../../../images/languages/south-korea.png';

export const GET_LANGUAGES = `${NAMESPACE_COMMON}/GET_LANGUAGES`;
export const SET_LANGUAGES = `${NAMESPACE_COMMON}/SET_LANGUAGES`;

export const DEFAULT_LANG = {
    code: 'en'
};

export const APP_LOCALES = [
    {
        name: 'English',
        imgSrc: English,
        code: 'en'
    },
    {
        name: 'Vietnamese',
        imgSrc: VietName,
        code: 'vi'
    },
    {
        name: 'Chinese',
        imgSrc: Chinese,
        code: 'zh'
    },
    {
        name: 'Korean',
        imgSrc: Korean,
        code: 'ko'
    }
];
