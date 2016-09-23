var express = require('express');

var loginRoute = require('./login');

var router = express.Router();

console.log('Mount login routes');
router.get('/login', loginRoute.get);
router.post('/login', loginRoute.post);

module.exports = router;