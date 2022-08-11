const router = require('express').Router();
const apiController = require('./controllers/apiController');
const pictureController = require('./controllers/pictureController');

router.use('/api', apiController);

router.use('/pictures', pictureController);

module.exports = router;