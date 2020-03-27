const CUSTOM_ENDPOINTS = [
    { 
        url: 'https://osb-log-metric-dashboard-backend-test.system.cf.hob.local', 
        identifier: 'log-metric-backend' 
    }
];

const ENDPOINT_URL = ""

const REDIRECT = {
    responseType: "code"
}

const CLIENT = {
    clientSecret: "1228c255-ba0c-447c-8656-39306b8b6d06",
    clientId: "demo-client",
    realm: "Demo",
    keycloak: "http://localhost:8080"
}

const TOKEN = {
    grant_type: "authorization_code",
    response_type: "id_token token",
    scope: "openid",
    prefix: "Bearer "
}

module.exports = {
    CLIENT,
    TOKEN,
    REDIRECT,
    CUSTOM_ENDPOINTS,
    ENDPOINT_URL
  }