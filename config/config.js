require('dotenv').config();

module.exports = {
  development: {
    username: 'investproadmin',
    password: 'Hansi@#123987',
    database: 'investprodb',
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};