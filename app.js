// Webserver Configuration
const port = 4000;
const basePath = 'http://localhost:4000';

// Identity Provider Configuration
const {CLIENT} = require('./config')
const {TOKEN} = require('./config')
const {REDIRECT} = require('./config')
const {CUSTOM_ENDPOINTS} = require('./config')

// Custom Imports
const configService = require('./config.service');
const authentication = require('./authentication.service.js');

//
const redirectUrl = `${CLIENT.keycloak}/auth/realms/${CLIENT.realm}/protocol/openid-connect/auth?client_id=${CLIENT.clientId}&client_secret=${CLIENT.clientSecret}&response_type=${REDIRECT.responseType}`;

const http = require('http');
const path = require('path');
const express = require('express');
const qs = require('querystring');
const axios = require('axios');
var app = express();
app.engine('html', require('./templating').TemplateEngine);
app.set('views', __dirname + "/public/monitoring");
app.set('view engine', 'html');
app.use(express.static(__dirname + "/public/monitoring"));


// Endpoint Conofiguration
app.get('/keycloak/cert', (req, res) => {
    
    console.log(configService.getCert)
    res.send(configService.getCert)
});

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname))
});

app.get('/authentication/:instanceId', (req, res) => {

    const redirect = redirectUrl + `&redirect_uri=${basePath}/authentication/${req.params.instanceId}/confirm`
    res.redirect(redirect)
});

app.get('/authentication/:instanceId/confirm', (req, res) => {

    const redirectUri = `${basePath}/authentication/${req.params.instanceId}/confirm`;

    const requestBody = {
        client_id: CLIENT.clientId,
        client_secret: CLIENT.clientSecret,
        grant_type: TOKEN.grant_type,
        response_type: TOKEN.response_type,
        scope: TOKEN.scope,
        code: req.query.code,
        state: req.query.session_state,
        redirect_uri: redirectUri
    }

    axios.post(`${CLIENT.keycloak}/auth/realms/${CLIENT.realm}/protocol/openid-connect/token`, qs.stringify(requestBody), { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).
        then((result) => {
            res.render(`index.html`, { baseHref: `/authentication/${req.params.instanceId}`, serviceInstanceId: req.params.instanceId, endpointUrl: ENDPOINT_URL, customEndpoints: JSON.stringify(CUSTOM_ENDPOINTS), token: TOKEN.prefix + result.data.access_token})
        })
})

// Run Server
const server = http.createServer(app);

server.listen(port, () => console.log("Dashboard Webserver started..."));
