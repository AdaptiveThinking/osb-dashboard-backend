var jwt = require('jsonwebtoken');
var config = require('./config.service.js');

module.exports = {
    checkToken: function (token) {
        jwt.verify(token, config.keycloakPK, { ignoreExpiration: false });
        return true;
    }
}