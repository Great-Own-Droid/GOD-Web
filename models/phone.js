'use strict';
module.exports = function (sequelize, DataTypes) {
    var Phone = sequelize.define('Phone', {
        phoneNumber: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Phone.belongsTo(models.Contact, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Phone;
};