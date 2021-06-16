// Imports
const http = require('http');
const path = require('path');
const express = require('express');

// Environment
const environment = require('./config/environment');

// Services
const authenticationService = require('./services/authentication.service');

// App Configuration
var app = express();
app.engine('html', require('./templating').TemplateEngine);
app.set('views', __dirname + "/public/monitoring");
app.set('view engine', 'html');
app.use('/app', express.static(__dirname + "/public/monitoring"));

// Endpoint Configuration
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname))
});

app.get('/authentication/:instanceId', (req, res) => {
    console.log('GET /authentication/' + req.params.instanceId);
    const redirectUri = authenticationService.buildRedirectUri(req.params.instanceId);
    console.log('redirecting to: ' + redirectUri)
    res.redirect(authenticationService.buildAuthenticationUri(redirectUri));
});

app.get('/authentication/:instanceId/confirm', (req, res) => {
    console.log('GET /authentication/' + req.params.instanceId + 'confirm');
    const redirectUri = authenticationService.buildRedirectUri(req.params.instanceId);
    console.log('redirecting to: ' + redirectUri)
    const requestBody = authenticationService.buildRequestBody(req.query.code, req.query.session_state, redirectUri);
    console.log(requestBody)
    const serviceInstanceId = req.params.instanceId;
    authenticationService.getAccessToken(requestBody).
        then((result) => {
            console.log('Authentication successfull')
            res.render(`index.html`, {
                baseHref: `/authentication/${serviceInstanceId}`, serviceInstanceId: serviceInstanceId, token: 'Bearer ' + result.data.access_token
            })
        });
}

);

// Start Webserver
const server = http.createServer(app);
server.listen(environment.webserver.port, () => console.log(`Dashboard Webserver is running...`));
console.log(environment);
