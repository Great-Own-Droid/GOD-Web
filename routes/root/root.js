exports.root = function(req, res){
    if(!req.session.isConnected){
        res.redirect('/admin/login');
        return;
    }

    res.render('root/root');
}