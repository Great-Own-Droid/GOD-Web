var models = require('../../../models');

module.exports = function (req, res) {
    models.User.findAll({
        include: [models.Contact]
    }).then(function (users) {
        res.render('list', {
            title: 'Users',
            users: users
        });
    });
};