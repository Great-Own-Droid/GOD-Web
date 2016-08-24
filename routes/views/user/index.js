var express = require('express');

var registryView = require('./registry.js');
var loginView = require('./login.js');
var logoutView = require('./logout.js');
var profileView = require('./profile.js');
var listView = require('./list.js');


var router = express.Router();

// Register page
router.get('/registry', registryView);
// Login page
router.get('/login', loginView);
// Logout page
router.get('/logout', logoutView);
// User profile page
router.get('/', profileView);
// User list page
router.get('/list', listView);


module.exports = router;