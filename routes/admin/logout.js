exports.logout = function(req, res){

    if(!req.session.isConnected){
        res.redirect('/');
        return;
    }

    req.session.destroy();
    res.redirect('/');
}