const client = require('cloud-config-client');
const environment = require('../config/environment');

module.exports = loadConfiguration = () => {
    return client
        .load({
            name: environment.configserver.name,
            profiles: environment.configserver.profiles,
            endpoint: environment.configserver.url,
            auth: environment.configserver.auth,
            rejectUnauthorized: false
        });
}
