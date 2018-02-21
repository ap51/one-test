"use strict";

const express = require('express');

const https = require('https');
const cluster = require('cluster');
const path = require('path');

const fs = require('fs');
const privateKey  = fs.readFileSync('ssl/key.pem', 'utf8');
const certificate = fs.readFileSync('ssl/cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsListenPort = 8088;


//let ClusterStore = require('strong-cluster-express-store')(session);

const history = require('connect-history-api-fallback');

    const app = express();
    //app.use(bodyParser.json());

    let httpsServer = https.createServer(credentials, app);

    let services = ['vue'];
    //let services = ['octopus', 'graphy', 'vue'];

    app.use('/_file_/:name', function (req, res, next){
        fs.readFile(path.join(__dirname, 'file-storage', req.params.name), function (err, content){
            if(err) {
                res.status(500).end(`<!DOCTYPE html><html> <head><meta charset="utf-8"></head><body>Ошибка при запросе файла: ${req.params.name}</body></html>`);
            }
            else {
                //let c = content.toLocaleString();
                res.end(content);
            }
        });
    });

    httpsServer.listen(3001);


//EXPRESS-SESSION CHANGES!!!!
/*
function getcookie(req, name, secret) {
    var header = req.headers.cookie || req.headers['x-session'];
    var raw;
    var val;

    // read from cookie header
    if (header) {
        var cookies = cookie.parse(header);

        raw = cookies[name];

        if (raw) {
            if (raw.substr(0, 2) === 's:') {
                val = signature.unsign(raw.slice(2), secret);

                if (val === false) {
                    debug('cookie signature invalid');
                    val = undefined;
                }
            } else {
                debug('cookie unsigned')
            }
        }
    }

    // back-compat read from cookieParser() signedCookies data
    if (!val && req.signedCookies) {
        val = req.signedCookies[name];

        if (val) {
            deprecate('cookie should be available in req.headers.cookie');
        }
    }

    // back-compat read from cookieParser() cookies data
    if (!val && req.cookies) {
        raw = req.cookies[name];

        if (raw) {
            if (raw.substr(0, 2) === 's:') {
                val = signature.unsign(raw.slice(2), secret);

                if (val) {
                    deprecate('cookie should be available in req.headers.cookie');
                }

                if (val === false) {
                    debug('cookie signature invalid');
                    val = undefined;
                }
            } else {
                debug('cookie unsigned')
            }
        }
    }

    return val;
}
function setcookie(res, name, val, secret, options) {
    var signed = 's:' + signature.sign(val, secret);
    var data = cookie.serialize(name, signed, options);

    debug('set-cookie %s', data);

    var prev = res.getHeader('set-cookie') || [];
    var header = Array.isArray(prev) ? prev.concat(data)
        : Array.isArray(data) ? [prev].concat(data)
            : [prev, data];

    res.setHeader('set-cookie', header)
    res.setHeader('x-session', header)
}*/
