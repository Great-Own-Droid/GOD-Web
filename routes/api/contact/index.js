var express = require('express');
var router = express.Router();

var getAll = require('./getAll');
var get = require('./get');
var post = require('./post');
var put = require('./put');
var del = require('./del');

router.get('/', getAll);
router.get('/:id', get);
router.post('/', post);
router.put('/:id', put);
router.delete('/:id', del);


module.exports = router;
