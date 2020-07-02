const ENVIRONMENT = require("../config/environment");
const configService = require("../services/config.service")();
const qs = require('querystring');
const axios = require('axios');
let config;

const REDIRECT = {
    responseType: "code"
}

const TOKEN = {
    grant_type: "authorization_code",
    response_type: "id_token token",
    prefix: "Bearer "
}

configService.then((config) => {

    //config.forEach((key, value) => console.log(key + ":" + value));

    //IdentityProvider
    if ((config.get("identity-provider.authType") == "kc")) {
        config = {
            host: config.get("identity-provider.host"),
            realm: config.get("identity-provider.realm"),
            clientId: config.get("identity-provider.clientId"),
            clientSecret: config.get("identity-provider.clientSecret"),
            scopes: config.get("identity-provider.scopes"),
            apiEndpoint: config.get("identity-provider.apiEndpoint"),
            endpointUrl: "http://localhost:8081"
        }
    }


})
    .catch(error => {
        console.log(error)
    });

exports.getAccessToken = function (requestBody) {
    return axios.post(`${config.apiEndpoint}/realms/${config.realm}/protocol/openid-connect/token`, qs.stringify(requestBody), { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
}

exports.buildRedirectUri = function (instanceId) {
    return `${ENVIRONMENT.webserver.hostname}:${ENVIRONMENT.webserver.port}/authentication/${instanceId}/confirm`;
}

exports.buildAuthenticationUri = function (redirectUri) {
    return `${config.apiEndpoint}/realms/${config.realm}/protocol/openid-connect/auth?client_id=${config.clientId}&client_secret=${config.clientSecret}&response_type=${REDIRECT.responseType}&redirect_uri=${redirectUri}`;
}

exports.buildRequestBody = function (authCode, sessionsState, redirectUri) {
    return requestBody = {
        client_id: ENVIRONMENT.identiyProvider.clientId,
        client_secret: ENVIRONMENT.identiyProvider.clientSecret,
        grant_type: TOKEN.grant_type,
        response_type: TOKEN.response_type,
        scope: ENVIRONMENT.identiyProvider.scopes,
        code: authCode,
        state: sessionsState,
        redirect_uri: redirectUri
    }
}