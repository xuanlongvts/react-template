import * as config from './const';

const commTitleHome = config.commTitleHome;
const commTitleNew = config.commTitleNew;
const commTitleTeam = config.commTitleTeam;
const commTitleCareers = config.commTitleCareers;
const commTitleFaq = config.commTitleFaq;
const commDescriptionHome = config.commDescriptionHome;
const commescriptionNew = config.commDescriptionNew;
const commescriptionTeam = config.commDescriptionTeam;
const commescriptionCareers = config.commDescriptionCareers;
const commescriptionFaq = config.commDescriptionFaq;

const commNav = config.commNav;

const zh = {};

zh[`${commTitleHome}`] = 'Bigbom Decentralized Advertising Ecosystem';
zh[`${commDescriptionHome}`] =
    'Bigbom aims at solving trust issue and payment problems of the online advertising world!';
zh[`${commTitleNew}`] = 'Bigbom Latest News';
zh[`${commescriptionNew}`] =
    'Latest Bigbom partnerships, events, and product updates news. Other blockchain and cryptocurrency news featuring Bigbom.';
zh[`${commTitleTeam}`] = 'Bigbom Team';
zh[`${commescriptionTeam}`] =
    'Bigbom family consists of both well-experienced engineers and young dynamic members under one roof to head for one beautiful vision together.';
zh[`${commTitleCareers}`] = 'Bigbom Job Opportunities';
zh[`${commescriptionCareers}`] =
    'Bigbom is looking for talents with knowledge in blockchain, cryptocurrency or marketing to join our team!';
zh[`${commTitleFaq}`] = 'Bigbom FAQ';
zh[`${commescriptionFaq}`] =
    'This part contains the most frequently asked questions about Bigbom Project! All in one place, have a look!';

zh[`${commNav}.${config.home}`] = 'sdf';
zh[`${commNav}.${config.news}`] = '';
zh[`${commNav}.${config.whitepaper}`] = '';
zh[`${commNav}.${config.team}`] = '';
zh[`${commNav}.${config.careers}`] = 'Careers';
zh[`${commNav}.${config.faq}`] = 'FAQ';

export default zh;
