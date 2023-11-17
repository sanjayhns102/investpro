const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes'); // Assuming you have a userRoutes file

router.use('/api', userRoutes);
// Add other route files similarly

module.exports = router;
