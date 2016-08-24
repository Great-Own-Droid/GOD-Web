var models = require('../../../models');

module.exports = function (req, res) {
    models.Contact.find({
        where: {
            id: req.params.id
        }
    }).then(function (contact) {
        if (contact == null) {
            res.status(404);
            res.json({
                status: 404,
                res: "not found"
            })
        } else {
            res.json(contact);
        }
    });
};