const env = process.env.NODE_ENV // 'develop' or 'test'
var os = require("os");

const develop = {
    webserver: {
        hostname: process.env.HOSTNAME || os.hostname(),
        port: parseInt(process.env.PORT) || 4000
    },
    configserver: {
        url: process.env.CFG_SERVER,
        name: process.env.CFG_SERVER_APPLICATION,
        auth: {
            user: process.env.CFG_SERVER_USERNAME,
            pass: process.env.CFG_SERVER_PASSWORD
        },
        profiles: process.env.ACTIVE_PROFILES
    }
};

const test = {
    webserver: {
        hostname: 'http://localhost',
        port: 4000
    },
    configserver: {
        url: process.env.CFG_SERVER,
        name: process.env.CFG_SERVER_APPLICATION,
        auth: {
            user: process.env.CFG_SERVER_USERNAME,
            pass: process.env.CFG_SERVER_PASSWORD
        },
        profiles: 'log-metric-dashboard'
    }
};

const environment = {
    develop,
    test
};

module.exports = environment[env];