var winston = require('winston');
var config = require('../config/config.json');

var logger = new (winston.Logger)({
    level: 'verbose',
    transports: [
        new (winston.transports.Console)()
    ]
})

module.exports = logger;