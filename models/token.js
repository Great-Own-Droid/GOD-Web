'use strict';
module.exports = function(sequelize, DataTypes) {
  var Token = sequelize.define('Token', {
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Token.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Token;
};