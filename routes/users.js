var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/new', function (req, res, next) {
    models.User.create({
        username: req.body.username,
        hash: req.body.password,
        salt: req.body.salt,
        isAdmin: false
    }).then(function () {
        res.redirect('/');
    });
});

router.get('/:user_id/destroy', function (req, res, next) {
    models.User.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(function () {
        res.redirect('/');
    });
});

router.get('/login', function (req, res, next) {
    res.render('login', {
        title: 'Login'
    });
})

router.post('/login', function (req, res, next) {
    models.User.find({
        where: {
            username: req.body.username,
        }
    }).then(function (user) {
        if (user) {
            res.redirect('/');
        } else {
            console.log(false);
            res.redirect('/users/login');
        }
    });
})
module.exports = router;
