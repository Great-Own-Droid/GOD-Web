var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {

    models.User.findAll({
        include: [models.Contact]
    }).then(function (users) {
        res.render('index', {
            title: 'Sequelize: Express Example',
            users: users
        });
    });
});

module.exports = router;
