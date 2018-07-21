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

const ko = {};

ko[`${commTitleHome}`] = 'Bigbom Decentralized Advertising Ecosystem';
ko[`${commDescriptionHome}`] =
    'Bigbom aims at solving trust issue and payment problems of the online advertising world!';
ko[`${commTitleNew}`] = 'Bigbom Latest News';
ko[`${commescriptionNew}`] =
    'Latest Bigbom partnerships, events, and product updates news. Other blockchain and cryptocurrency news featuring Bigbom.';
ko[`${commTitleTeam}`] = 'Bigbom Team';
ko[`${commescriptionTeam}`] =
    'Bigbom family consists of both well-experienced engineers and young dynamic members under one roof to head for one beautiful vision together.';
ko[`${commTitleCareers}`] = 'Bigbom Job Opportunities';
ko[`${commescriptionCareers}`] =
    'Bigbom is looking for talents with knowledge in blockchain, cryptocurrency or marketing to join our team!';
ko[`${commTitleFaq}`] = 'Bigbom FAQ';
ko[`${commescriptionFaq}`] =
    'This part contains the most frequently asked questions about Bigbom Project! All in one place, have a look!';

ko[`${commNav}.${config.home}`] = '';
ko[`${commNav}.${config.news}`] = 'ko';
ko[`${commNav}.${config.whitepaper}`] = '';
ko[`${commNav}.${config.team}`] = '';
ko[`${commNav}.${config.careers}`] = 'Careers';
ko[`${commNav}.${config.faq}`] = 'FAQ';

export default ko;
