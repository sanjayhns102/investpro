const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sequelize = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// Sync the models with the database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch(err => {
  console.error('Error while creating database', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
