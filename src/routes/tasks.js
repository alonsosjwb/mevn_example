const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', (req, res)=>{
    Task.find() //Using promises
        .then(data=>{
            res.json(data)
        })
})

module.exports = router;