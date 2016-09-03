var models = require('../../../models');

module.exports = function (req, res) {


    models.Contact.findAll({
        where:{
            UserId: req.user.id
        }
    }).then(function (contacts) {
        res.json(contacts);
    });
};