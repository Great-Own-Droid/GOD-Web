exports.root = function(req, res){
    if(!req.session.isConnected){
        res.redirect('/admin/login');
        return;
    }

    res.json({message: "ta race"});
}