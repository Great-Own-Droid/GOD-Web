var express = require('express');
var router = express.Router();

var contact = require('./contact');

router.use('/contact', contact);



router.use(function (req, res) {
    res.status(404);
    res.render('error', {
        message: 'API NOT FOUND',
        error: 'GO ELSEWHERE'
    });
});

module.exports = router;
