'use strict';
module.exports = function (sequelize, DataTypes) {
    var Conversation = sequelize.define('Conversation', {
        correspondentPhoneNumber: DataTypes.STRING,
        isValidNumber: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                Conversation.hasMany(models.Sms);
                Conversation.belongsTo(models.Sim, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Conversation;
};