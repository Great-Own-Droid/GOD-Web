var express = require('express');

var registryView = require('./registry.js');
var loginView = require('./login.js');
var logoutView = require('./logout.js');
var profileView = require('./profile.js');
var listView = require('./list.js');


var router = express.Router();

module.exports = router;