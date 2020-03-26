const axios = require('axios');
const TemplateEngine = require('thymeleaf');
const expressThymeleaf = require('express-thymeleaf')
const authentication = require('./authentication.service.js')
let templateEngine = new TemplateEngine.TemplateEngine(TemplateEngine.STANDARD_CONFIGURATION);

const port = 4000;

const customEndpoints = [{ url: 'https://osb-log-metric-dashboard-backend-test.system.cf.hob.local', identifier: 'log-metric-backend' }];

const redirect = {
    responseType: "code"
}

const client = {
    clientSecret: "1228c255-ba0c-447c-8656-39306b8b6d06",
    clientId: "demo-client",
    realm: "Demo",
    keycloak: "http://localhost:8080"
}

const token = {
    grant_type: "authorization_code",
    response_type: "id_token token",
    scope: "openid"
}

const basePath = 'http://localhost:4000'
const redirectUrl = `${client.keycloak}/auth/realms/${client.realm}/protocol/openid-connect/auth?client_id=${client.clientId}&client_secret=${client.clientSecret}&response_type=${redirect.responseType}`

const http = require('http');
const path = require('path')
const express = require('express');
const qs = require('querystring');
var app = express();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');

app.use(express.static(__dirname + "/public/monitoring"));

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname))
});

app.get('/authentication/:instanceId', (req, res) => {

    const redirect = redirectUrl + `&redirect_uri=${basePath}/authentication/${req.params.instanceId}/confirm`
    res.redirect(redirect)
});

app.get('/authentication/:instanceId/confirm', (req, res) => {

    const redirectUri = `${basePath}/authentication/${req.params.instanceId}/confirm`

    const requestBody = {
        client_id: client.clientId,
        client_secret: client.clientSecret,
        grant_type: token.grant_type,
        response_type: token.response_type,
        scope: token.scope,
        code: req.query.code,
        state: req.query.session_state,
        redirect_uri: redirectUri
    }

    axios.post(`${client.keycloak}/auth/realms/${client.realm}/protocol/openid-connect/token`, qs.stringify(requestBody), { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).
        then((result) => {
            res.render(`${__dirname}/public/monitoring/index.html`, { baseHref: `${basePath}/authentication/${req.params.instanceId}`, serviceInstanceId: req.params.instanceId, endpointUrl: "", customEndpoints, toke: result.data.access_token})
        })
})

const server = http.createServer(app);

server.listen(port, () => console.log("Dashboard Webserver started..."));
