const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res)=>{
    const tasks = await Task.find();
    console.log("🚀 ~ file: tasks.js ~ line 8 ~ router.get ~ tasks", tasks)
    res.json(tasks);
})

router.post('/', async (req, res)=>{
    
})

module.exports = router;