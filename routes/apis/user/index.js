console.log("User API ROUTER : Start define mountable methods");
var express = require('express');
var router = express.Router();


var getAll = require('./getAll.js');
var get = require('./get.js');
var post = require('./post.js');
var put = require('./put.js');
var del = require('./delete.js');

router.get('/', getAll);
router.get('/:id', get);
router.post('/:id', post);
router.put('/', put);
router.delete('/:id', del);


module.exports = router;

console.log("User API ROUTER : End define mountable methods");
/*
 // TODO: to move in views routes
 router.get('/login', function (req, res, next) {
 res.render('login', {
 title: 'Login'
 });
 })

 router.post('/login', function (req, res, next) {
 models.User.find({
 where: {
 username: req.body.username,
 }
 }).then(function (user) {
 if (user) {
 res.redirect('/');
 } else {
 console.log(false);
 res.redirect('/users/login');
 }
 });
 })
 */
