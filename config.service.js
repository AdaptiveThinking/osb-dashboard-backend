const axios = require('axios');
const {CLIENT} = require('./config');

const certEndpoint = `${CLIENT.keycloak}/auth/realms/${CLIENT.realm}/protocol/openid-connect/certs`

module.exports = {
    keycloakCert: function () {
        axios.get(certEndpoint)
            .then((result) => {
                const publicKey = result.keys[0].x5c[0]
                return publicKey;
            })
    }
}