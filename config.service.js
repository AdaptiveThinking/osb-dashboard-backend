/* const axios = require('axios');
var app = require('./app.js');

const certEndpoint = `${app.client.keycloak}/auth/realms/${app.client.realm}/protocol/openid-connect/certs`

axios.get(certEndpoint)
    .then((result) => {
        const publicKey = result.keys[0].x5c[0]
    }) */