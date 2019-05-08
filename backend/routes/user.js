const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Monk
const db = require('monk')(process.env.MONGODB_URI,{ authSource:'admin' })
const collection = db.get('users')

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

router.route('/').get(function(req, res) {
    collection
        .find()
        .then(user => { res.json(user) })
        .catch(err => { console.log(err) })
})

router.post('/register', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    collection
        .findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } 
            const newUser = {
                email: req.body.email,
                password: req.body.password,
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            };

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    console.log(newUser)
                    collection
                        .insert(newUser)
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                });
            });
        })
});

router.post('/login', (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    
    // Find user by email
    collection
        .findOne({ email })
        .then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
            
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                // User matched
                // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };

                // Sign token
                    jwt.sign(payload, keys.secretOrKey, {
                        expiresIn: 31556926 // 1 year in seconds
                    },(err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Password incorrect" });
                }
            });
        })
});

module.exports = router;