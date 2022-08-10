const router = require('express').Router();
const { Picture } = require('../models/Picture');

router.get('/pictures', (req, res) => {
    Picture.find()
        .then((pictures) => {
            res.json(pictures);
        })
        .catch((err) => {
            res.json(err);
        }
        );
});

router.get('/pictures/:id', (req, res) => {
    const id = req.params.id;

    Picture.findById(id)
    .then((picture) => {
        res.json(picture);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.put('/pictures/:id', (req, res) => {
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

router.post('/pictures', (req, res) => {
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