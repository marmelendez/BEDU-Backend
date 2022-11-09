const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    firstSurname: DataTypes.STRING,
    secondSurname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: "cliente",
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    hooks: {
      beforeCreated: (user) => {
        const salt = bcrypt.genSaltSynd()
        user.password = bcrypt.hashSync(user.password, salt)
      }
    }
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User;
};