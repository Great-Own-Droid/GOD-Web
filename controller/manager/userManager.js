var models = require('../../models');
var bcrypt = require('bcryptjs');
var logger = require('../logger');

var promise = require('promise');

exports.login = function (username, password) {
    return new promise(function(resolve, reject){
        models.User.findOne({
            username: username
        }).then(function (user) {
            if (user == null){
                reject("Username and Password can't identify yourself");
            }else {
                bcrypt.compare(password, user.hash,function (err, result) {
                    if (result){
                        resolve(user);
                    } else {
                        reject("Username and Password can't identify yourself");
                    }
                });
            }
        }).catch(function (err) {
            logger.info(err.message);
            reject("Problem with db");
        });
    })
}

exports.setUser = function(req, res, next){
    logger.info('init user');
    if (typeof(req.session.userId) !== 'undefined'){
        models.User.findById(req.session.userId)
            .then(function (user) {
                if (user == null){
                    logger.info('No user found with id '+ req.session.userId);
                    req.user = false
                } else {
                    logger.info('found user with id '+ user.id);
                    req.user = user;
                }
                next();
            })
    }else {
        req.user = false
        logger.info('No userid found');
        next();
    }
}