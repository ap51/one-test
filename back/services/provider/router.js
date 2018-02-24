const path = require('path');
const express = require('express');
const staticFileMiddleware = express.static(path.join(__dirname.replace(/services[\/|\\].*/, ''), 'public'), {});
const bodyParser = require('body-parser');

const history = require('connect-history-api-fallback');

let service = 'provider';

let router = express.Router();

router.use(staticFileMiddleware);

router.use(history({
    disableDotRule: true,
    verbose: true
}));

router.use(staticFileMiddleware);
router.use(bodyParser.json());

const loadContent = require('../../utils').loadContent;

router.all('/:route', async function(req, res, next) {
    let route = req.params.route;

    let content = route && await loadContent(route, res, service);

    res.end(content);
});

const readFile = require('../../utils').readFile;

const {Pool} = require('pg');
const pgtools = require('pgtools');

const config = {
    user: 'postgres',
    password: '123',
    port: 5432,
    host: 'localhost'
};

let applySchema = async function() {
    try {
        let result = await pgtools.createdb(config, 'oauth_provider');
    }
    catch (err) {
        console.log(err);
    }

    let content = await readFile(__dirname + '/schema.sql');

    let schema = content.toString();

    config.database = 'oauth_provider';

    const pool = new Pool(config);

    try {
        let result = await pool.query(schema);
    }
    catch (err) {
        console.log(err);
    }

    pool.end();

};

applySchema();

module.exports = router;