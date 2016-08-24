var models = require('../../../models');

module.exports = function (req, res) {
	models.User.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(function () {
        res.redirect('/');
    });
};