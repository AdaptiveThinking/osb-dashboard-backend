const environment = require("../config/environment");
const configService = require("../services/config.service")();
const qs = require('querystring');
const axios = require('axios');
let config;

const REDIRECT = {
    responseType: "code"
}

const TOKEN = {
    grant_type: "authorization_code",
    response_type: "token",
    prefix: "Bearer "
}

configService.then((cfg) => {

    //cfg.forEach((key, value) => console.log(key + ":" + value));

    //IdentityProvider
    config = {
        host: cfg.get("identity-provider.host"),
        realm: cfg.get("identity-provider.realm"),
        clientId: cfg.get("identity-provider.clientId"),
        clientSecret: cfg.get("identity-provider.clientSecret"),
        apiEndpoint: cfg.get("identity-provider.apiEndpoint"),
        scopes: cfg.get("identity-provider.scopes"),
        endpointUrl: "http://localhost:8081"
    }

    //console.log(config)

})
    .catch(error => {
        console.log(error)
    });

exports.getAccessToken = function (requestBody) {
    return axios.post(`${config.apiEndpoint}/realms/${config.realm}/protocol/openid-connect/token`, qs.stringify(requestBody), { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
}

exports.buildRedirectUri = function (instanceId) {
    return `${environment.webserver.hostname}:${environment.webserver.port}/authentication/${instanceId}/confirm`;
}

exports.buildAuthenticationUri = function (redirectUri) {
    return `${config.apiEndpoint}/realms/${config.realm}/protocol/openid-connect/auth?client_id=${config.clientId}&client_secret=${config.clientSecret}&response_type=${REDIRECT.responseType}&redirect_uri=${redirectUri}`;
}

exports.buildRequestBody = function (authCode, sessionsState, redirectUri) {
    return requestBody = {
        client_id: config.clientId,
        client_secret: config.clientSecret,
        grant_type: TOKEN.grant_type,
        response_type: TOKEN.response_type,
        scope: config.scopes,
        code: authCode,
        state: sessionsState,
        redirect_uri: redirectUri
    }
}