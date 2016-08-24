var models = require('../../../models');

module.exports = function (req, res) {


    models.Contact.findAll().then(function (contacts) {
        res.json(contacts);
    });
};