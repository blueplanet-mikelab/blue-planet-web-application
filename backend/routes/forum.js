const express = require('express');
const router = express.Router();

// Monk
const db = require('monk')(process.env.MONGODB_URI,{ authSource:'admin' })
const collection = db.get('forums')

router.route('/').get(function(req, res){
    collection
        .find()
        .then(forum => { res.json(forum) })
        .catch(err => { console.log(err) })
})

router.route('/:id').get(function(req, res) {
    collection
        .find({ '_id': req.params.id })
        .then(forum => res.json(forum))
        .catch(err => { console.log(err) })
})

router.route('/add').post(function(req, res) {
    collection
        .insert(req.body)
        .then(forum => { res.send(200).json({ 'thread': 'thread added successfully' }) })
        .catch(err => { res.send(400).json('Adding thread failed') })
})

// router.route('/update/:id').post(function(req, res) {
//     Forum.findById(req.params.id, function(err, thread) {
//         if (!thread) {
//             res.status(400).send('thread not found')
//         } else {
//             thread.title = req.body.title
//             thread.desc = req.body.desc
//             // add more params
//             thread.save()
//                 .then(thread => { res.json('thread updated') })
//                 .catch(err => { res.status(400).send('update is not possible') })
//         }
//     })
// })

module.exports = router;