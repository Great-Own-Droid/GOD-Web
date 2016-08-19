'use strict';
module.exports = function (sequelize, DataTypes) {
    var Sms = sequelize.define('Sms', {
        content: DataTypes.TEXT,
        isFromUser: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                Sms.belongsTo(models.Conversation, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                Sms.belongsTo(models.Sim, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Sms;
};