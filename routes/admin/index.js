var express = require('express');
var loginForm = require('./login');
var logout = require('./logout');

var router = express.Router();

// Specifics paths
console.log("Mount login routes");
router.get('/login', loginForm.get);
router.post('/login', loginForm.post);

console.log("Mount logout routes");
router.get('/logout', logout.logout);

module.exports = router;