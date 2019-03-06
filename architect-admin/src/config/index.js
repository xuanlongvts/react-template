const env = process.env.REACT_APP_ENV;
const listConfigs = {
    dev: {
        API_SERVER: 'https://www.reddit.com',
    },
    uat: {
        API_SERVER: 'https://uat-abc.com',
    },
    production: {
        API_SERVER: 'https://www.reddit.com',
    },
};

export const Config = listConfigs[env];
export default env;
