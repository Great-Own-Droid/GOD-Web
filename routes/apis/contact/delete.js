var models = require('../../../models');

module.exports = function (req, res) {

    models.Contact.find({
        where: {
            id: req.params.id,
            UserId: req.user.id
        }
    }).then(function (contact) {
        if (contact == null) {
            res.status(404);
            res.json({
                message: "contact not found"
            })
        } else {
            contact.destroy();
            res.status(204).end()
        }
    });
};