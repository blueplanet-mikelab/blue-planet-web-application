const express = require('express');
const router = express.Router();

// Monk
const db = require('monk')('mikestd:mikestd1q2w3e4r@mars.mikelab.net:27017/blueplanet_project',{ authSource:'admin' })
const collection = db.get('smartData1')

router.route('/').get((req, res) => {
    collection
        .find()
        .then(result => res.send(result))
        .catch(err => { console.log(err) })
})

module.exports = router;