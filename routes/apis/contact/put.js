var models = require('../../../models');

module.exports = function (req, res) {
    models.Contact.findOne({
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

            if (req.body.first != null)
                contact.first = req.body.first;
            if (req.body.last != null)
                contact.last = req.body.last;

            contact.save().then(function (contact) {
                res.json(contact);
            }).catch(function (err) {
                res.status(500);
                res.json({
                    status: err.status,
                    message: err.message
                })
            });
        }
    });
};