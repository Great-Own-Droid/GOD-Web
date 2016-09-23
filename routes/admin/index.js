var express = require('express');
var loginForm = require('./../signin/login');
var logout = require('./logout');

var router = express.Router();

// Define global permission access for api
router.use(function (req, res, next) {
    if (!req.session.isConnected){
        res.redirect('/login');
        return;
    }
    next();
});

console.log("Mount logout routes");
router.get('/logout', logout.logout);

module.exports = router;