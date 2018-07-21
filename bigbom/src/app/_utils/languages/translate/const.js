import {
    page_home,
    page_news,
    page_whitepaper,
    page_team,
    page_careers,
    page_faq
} from '../../../routers/RoutersAuthen';

const common = 'common';
export const home = page_home;
export const news = page_news;
export const whitepaper = page_whitepaper;
export const team = page_team;
export const careers = page_careers;
export const faq = page_faq;

export const title = 'title';
export const description = 'description';
export const nav = 'nav';
export const footer = 'footer';

export const commTitle = `${common}.${title}`;
export const commDescription = `${common}.${description}`;

export const commTitleHome = `${common}.${title}.${home}`;
export const commTitleNew = `${common}.${title}.${news}`;
export const commTitleTeam = `${common}.${title}.${team}`;
export const commTitleCareers = `${common}.${title}.${careers}`;
export const commTitleFaq = `${common}.${title}.${faq}`;
export const commDescriptionHome = `${common}.${description}.${home}`;
export const commDescriptionNew = `${common}.${description}.${news}`;
export const commDescriptionTeam = `${common}.${description}.${team}`;
export const commDescriptionCareers = `${common}.${description}.${careers}`;
export const commDescriptionFaq = `${common}.${description}.${faq}`;

export const commNav = `${common}.${nav}`;
export const commFooter = `${common}.${footer}`;
