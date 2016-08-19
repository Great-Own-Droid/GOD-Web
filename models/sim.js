'use strict';
module.exports = function (sequelize, DataTypes) {
    var Sim = sequelize.define('Sim', {
        number: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Sim.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                Sim.hasMany(models.Conversation);
                Sim.hasMany(models.Sms);
            }
        }
    });
    return Sim;
};