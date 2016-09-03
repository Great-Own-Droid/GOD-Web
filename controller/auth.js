// load required packages
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy
var models = require('../models/index');

passport.use(new BearerStrategy(function (accessToken, next) {
    models.Token.findOne({
        where: {
            value: accessToken
        },
        include: [models.User]
    }).then(function (token) {
        if (token == null)
            return next(null, false);
        if (token.User == null)
            return next(null, false);
        next(null, token.User, {scope: '*'});
    }).catch(function (err) {
        next(err);
    });
}));

exports.isBearerAuthenticated = passport.authenticate('bearer', {session: false});