"use strict";

const https = require('https');
const path = require('path');

const express = require('express');
const staticFileMiddleware = express.static(path.join(__dirname, 'public'), {});
const bodyParser = require('body-parser');

const history = require('connect-history-api-fallback');

const fs = require('fs');
const key  = fs.readFileSync('ssl/key.pem', 'utf8');
const cert = fs.readFileSync('ssl/cert.pem', 'utf8');
const credentials = {key, cert};

const httpsListenPort = 3001;


const app = express();

let httpsServer = https.createServer(credentials, app);

app.use('/_file_/:name', function (req, res, next){
    fs.readFile(path.join(__dirname, 'file-storage', req.params.name), function (err, content){
        if(err) {
            res.status(500).end(`<!DOCTYPE html><html> <head><meta charset="utf-8"></head><body>Ошибка при запросе файла: ${req.params.name}</body></html>`);
        }
        else {
            res.end(content);
        }
    });
});

let service = 'test';

let router = express.Router();

router.use(staticFileMiddleware);

router.use(history({
    disableDotRule: true,
    verbose: true
}));

router.use(staticFileMiddleware);
router.use(bodyParser.json());

let getSFC = function(name){
    return new Promise(function (resolve, reject) {
        fs.readFile(path.join(__dirname, 'components', name + '.vue'), function (err, content){
            err ? reject(err) : resolve(content);
        });
    });
};

let loadContent = async function (name, res) {
    let content = '';
    try {
        content = await getSFC(name);
    }
    catch (err) {
        content = await getSFC('not-found');
    }

    return content;
};

router.all('/:route', async function(req, res, next) {
    let route = req.params.route;

    let content = route && await loadContent(route, res);

    res.end(content);
});


app.use(`/${service}`, router);

httpsServer.listen(httpsListenPort);
console.log(`https servel linten on ${httpsListenPort} port.`)
