var models = require('../../models/index');
var userManager = require('../../controller/manager/userManager');

exports.get = function (req, res) {

    if(req.session.isConnected){
        res.redirect('/');
        return;
    }

    var err = req.flash('errlogin');
    res.render('admin/login', {err: err});
};

exports.post = function (req, res) {

    if(req.session.isConnected){
        res.redirect('/');
        return;
    }

    userManager
        .login(req.body.username, req.body.password)
        .then(function (user) {
            req.session.userId = user.id;
            req.session.isConnected = true;
            res.redirect('/');
        }).catch(function (message) {
            req.flash('errlogin', message);
            res.redirect('/login');
        });
};