var models = require('../../../models');

module.exports = function (req, res) {
    res.render('profile', {
        title: 'Profile'
    });
};