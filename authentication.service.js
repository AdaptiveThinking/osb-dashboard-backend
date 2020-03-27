var jwt = require('jsonwebtoken');
var config = require('./config.service.js');

module.exports = {
    checkToken: function (token) {
        jwt.verify(token, config.keycloakCert, { ignoreExpiration: false });
        return true;
    }
}