const env = process.env.NODE_ENV // 'develop' or 'test'

const develop = {
    webserver: {
        hostname: process.env.HOSTNAME,
        port: parseInt(process.env.PORT) || 4000,
        externalPort: ''
    },
    configserver: {
        url: process.env.CFG_SERVER,
        name: process.env.CFG_SERVER_APPLICATION,
        auth: {
            user: process.env.CFG_SERVER_USERNAME,
            pass: process.env.CFG_SERVER_PASSWORD
        },
        profiles: process.env.CFG_SERVER_ACTIVE_PROFILES
    }
};

const test = {
    webserver: {
        hostname: 'http://localhost',
        port: 4000,
        externalPort: this.port
    },
    configserver: {
        url: process.env.CFG_SERVER,
        name: process.env.CFG_SERVER_APPLICATION,
        auth: {
            user: process.env.CFG_SERVER_USERNAME,
            pass: process.env.CFG_SERVER_PASSWORD
        },
        profiles: process.env.CFG_SERVER_ACTIVE_PROFILES
    }
};

const environment = {
    develop,
    test
};

module.exports = environment[env];