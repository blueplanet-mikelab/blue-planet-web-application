const express = require('express');
const router = express.Router();

// Monk
const db = require('monk')(process.env.MONGODB_URI,{ authSource:'admin' })
const collection = db.get('smartData1')

router.route('/').get((req, res) => {
    collection
        .find()
        .then(result => res.send(result))
        .catch(err => { console.log(err) })
})

module.exports = router;
