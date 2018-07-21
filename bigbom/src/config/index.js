const env = process.env.REACT_APP_ENV;
const listConfigs = {
    // http://www.reddit.com
    // https://api.bigbom.net
    dev: {
        API_SERVER: 'https://api.bigbom.net',
        SOCKET: {
            secure: true,
            hostname: 'https://api.bigbom.net',
            port: 443,
            namespace: 'dev'
        }
    },
    staging: {
        API_SERVER: 'https://api.bigbom.net',
        SOCKET: {
            secure: true,
            hostname: 'https://api.bigbom.net',
            port: 443,
            namespace: 'staging'
        }
    },
    testing: {
        API_SERVER: '//testing-api.bigbom.net',
        SOCKET: {
            secure: true,
            hostname: '//testing-api.bigbom.net',
            port: 443,
            namespace: 'testing'
        }
    },
    uat: {
        API_SERVER: 'https://uat-abc.com',
        SOCKET: {
            secure: true,
            hostname: 'https://uat-abc',
            port: 443,
            namespace: 'uat'
        }
    },
    production: {
        API_SERVER: '//eco-api.bigbom.com',
        SOCKET: {
            secure: true,
            hostname: '//eco-api.bigbom.com',
            port: 443,
            namespace: 'production'
        }
    }
};

export const Config = listConfigs[env];
export default env;
