var models = require('../../../models');

module.exports = function (req, res) {
    models.User.create({
        username: req.body.username,
        hash: req.body.password,
        salt: req.body.salt,
        isAdmin: false
    }).then(function () {
        res.redirect('/');
    });
};