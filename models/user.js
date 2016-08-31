'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        hash: DataTypes.STRING,
        salt: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Contact);
                User.hasMany(models.Sim);
                User.hasMany(models.Token);
            }
        }
    });
    return User;
};