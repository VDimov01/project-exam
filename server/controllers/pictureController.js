const router = require('express').Router();
const { Picture } = require('../models/Picture');
const { body, validationResult, header } = require('express-validator');

router.get('/', (req, res) => {
    Picture.find().populate({path: 'comments', populate: {path: 'creator'}})
        .then((pictures) => {
            res.json(pictures);
        })
        .catch((err) => {
            res.json(err);
        }
        );
});

router.get('/details/:id', (req, res) => {
    const id = req.params.id;

    Picture.findById(id).populate({path: 'comments', populate: {path: 'creator'}})
        .then((picture) => {
            res.json(picture);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.put('/details/:id',
    header('X-Authorization', 'You need authorization token').exists(),
    body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').isLength({ min: 5 }).withMessage('Description must be at least 5 characters long'),
    body('imageUrl').isURL().withMessage('Image URL must be valid'),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        const picture = req.body;

        Picture.findByIdAndUpdate(id, picture)
            .then((picture) => {
                res.json(picture);
            })
            .catch((err) => {
                res.json(err);
            })
    });

router.delete('/details/:id', 
header('X-Authorization', 'You need authorization token').exists(),
(req, res) => {
    const id = req.params.id;

    const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    Picture.findByIdAndDelete(id)
        .then((picture) => {
            res.json(picture);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.post('/',
    header('X-Authorization', 'You need authorization token').exists(),
    body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').isLength({ min: 5 }).withMessage('Description must be at least 5 characters long'),
    body('imageUrl').isURL().withMessage('Image URL must be valid'),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const picture = req.body;

        Picture.create(picture)
            .then((picture) => {
                res.json(picture);
            })
            .catch((err) => {
                res.json(err);
            })
    });



module.exports = router;