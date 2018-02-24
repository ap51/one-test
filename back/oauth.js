const path = require('path');
const express = require('express');
const staticFileMiddleware = express.static(path.join(__dirname, 'public'), {});
const bodyParser = require('body-parser');

const history = require('connect-history-api-fallback');

let service = 'oauth';

let router = express.Router();

router.use(staticFileMiddleware);

router.use(history({
    disableDotRule: true,
    verbose: true
}));

router.use(staticFileMiddleware);
router.use(bodyParser.json());

const loadContent = require('./utils').loadContent;

router.all('/:route', async function(req, res, next) {
    let route = req.params.route;

    let content = route && await loadContent(route, res, 'oauth');

    res.end(content);
});


module.exports = {
    router
};