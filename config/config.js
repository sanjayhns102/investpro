require('dotenv').config();

module.exports = {
  development: {
    username: 'investproadmin',
    password: 'E37shAGGjI_d!wn',
    database: 'investprodb',
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};