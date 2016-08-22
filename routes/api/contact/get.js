var models = require('../../../models');

module.exports = function (req, res) {


    models.Contact.findAll({
        include: [models.Phone]
    }).then(function (contacts) {
        res.json(contacts);
    });
};