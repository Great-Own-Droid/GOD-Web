var models = require('../../../models');

module.exports = function (req, res) {

    models.Contact.create({
        first: req.body.first,
        last: req.body.last,
        UserId: req.user.id
    }).then(function (contact) {
        res.json(contact);
    }).catch(function(err){
        res.status(500);
        res.json({
            message: err.message,
            status: err.status
        })
    });
};