var models = require('../../../models');

module.exports = function (req, res) {

    models.Contact.findById(req.params.id)
        .then(function (contact) {
            if (contact == null) {
                res.status(404);
                res.json({
                    message: 'No contact found at this id'
                })
            } else {
                contact.destroy();
                res.status(204).end()
            }
        });
};