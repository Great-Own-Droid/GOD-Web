'use strict';
module.exports = function (sequelize, DataTypes) {
    var Contact = sequelize.define('Contact', {
        first: DataTypes.STRING,
        last: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Contact.hasMany(models.Phone);
                Contact.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Contact;
};