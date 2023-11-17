const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  mob: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  verification_link: {
    type: DataTypes.STRING,
  },
  verified_At: {
    type: DataTypes.DATE,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user', // Default role is 'user'
  },
  refer_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  own_referral_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;

