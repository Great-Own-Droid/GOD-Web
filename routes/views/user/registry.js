var models = require('../../../models');

module.exports = function (req, res) {
	res.render('index', {
		title: 'Register page',
		users: users
   });	
};