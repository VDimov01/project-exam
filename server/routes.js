const router = require('express').Router();
const apiController = require('./controllers/apiController');
const pictureController = require('./controllers/pictureController');
const commentController = require('./controllers/commentController');

router.use('/api', apiController);

router.use('/pictures', pictureController);

router.use('/comments', commentController);

module.exports = router;