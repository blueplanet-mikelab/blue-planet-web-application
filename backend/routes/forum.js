const express = require('express');
const router = express.Router();

const Forum = require('../models/forum');

router.route('/').get(function(req, res){
    Forum.find(function(err, thread) {
        if (err) {
            console.log(err)
        } else {
            res.json(thread)
        }
    })
})

router.route('/:id').get(function(req, res) {
    Forum.findById(req.params.id, function(err, thread) {
        res.json(thread)
    })
})

router.route('/update/:id').post(function(req, res) {
    Forum.findById(req.params.id, function(err, thread) {
        if (!thread) {
            res.status(400).send('thread not found')
        } else {
            thread.title = req.body.title
            thread.desc = req.body.desc
            // add more params
            thread.save()
                .then(thread => { res.json('thread updated') })
                .catch(err => { res.status(400).send('update is not possible') })
        }
    })
})

router.route('/add').post(function(req, res) {
    let forum = new Forum(req.body)
    forum.save()
        .then(thread => { res.send(200).json({'thread': 'thread added successfully'}) })
        .catch(err => { res.send(400).json('Adding thread failed') })
})

module.exports = router;