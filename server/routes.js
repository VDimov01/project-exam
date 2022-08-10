const router = require('express').Router();
const apiController = require('./controllers/apiController');

router.use('/api', apiController);

module.exports = router;