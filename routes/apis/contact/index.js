console.log("Contact API ROUTER : Start define mountable methods");

var express = require('express');
var router = express.Router();

var getAll = require('./getAll.js');
var get = require('./get.js');
var post = require('./post.js');
var put = require('./put.js');
var del = require('./delete.js');


router.get('/', getAll);
router.get('/:id', get);
router.post('/', post);
router.put('/:id', put);
router.delete('/:id', del);

module.exports = router;
console.log("Contact API ROUTER : End define mountable methods");
