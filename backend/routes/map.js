const express = require('express');
const router = express.Router();

// Monk
const db = require('monk')('mikestd:mikestd1q2w3e4r@mars.mikelab.net:27017/blueplanet_project',{ authSource:'admin' })
const collection = db.get('topCountries')

router.route('/topCountries').get((req, res) => {
    collection
        .find()
        .then(result => res.send(result[0].topCountries))
        .catch(err => { console.log(err) })
})

module.exports = router;