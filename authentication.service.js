var jwt = require('jsonwebtoken');
const axios = require('axios');
const { CLIENT } = require('./config')

module.exports = {
    verifyToken: function (token) {
        axios.get(`${CLIENT.keycloak}/auth/realms/${CLIENT.realm}/protocol/openid-connect/certs`).then((response) => {
            
            const publicKey = response.data.keys[0].x5c[0];

            jwt.verify(token, publicKey, { ignoreExpiration: false })
            
            console.log("Access Token verified successfully.")
        })
        .catch((err) => {
            console.error('Validation of Access-Token failed!')
        });

        return true;
    }
}