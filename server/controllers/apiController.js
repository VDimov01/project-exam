const router = require('express').Router();
const { User } = require('../models/User');
const brcypt = require('bcrypt');
const userService = require('../services/userService');
const { body, validationResult } = require('express-validator');

router.get('/users', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        }
        );
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;

    User.findById(id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        })
})

router.post('/users/register',
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = req.body;

        user.password = await brcypt.hash(user.password, 10);

        User.create(user)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            })

    });

router.post('/users/login', async (req, res) => {
    const user = req.body;
    const foundUser = await User.findOne({ email: user.email });

    if (!foundUser) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await brcypt.compare(user.password, foundUser.password);
    if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const token = await userService.createToken(foundUser)

    res.json({ _id: foundUser._id, email: foundUser.email, token });
});

module.exports = router;