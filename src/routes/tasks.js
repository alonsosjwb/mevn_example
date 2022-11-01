const { response } = require('express');
const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res=response)=>{
    const tasks = await Task.find();
    console.log("🚀 ~ file: tasks.js ~ line 8 ~ router.get ~ tasks", tasks)
    res.json(tasks);
})

router.post('/', async (req, res=response)=>{
    console.log("🚀 ~ file: tasks.js ~ line 15 ~ router.post ~ req.body", req.body)
    const task = new Task(req.body);
    console.log(task);
    await task.save();
    res.json({status: "Task saved"})
})

router.put('/:_id', async (req, res=response)=>{
    const task = await Task.findByIdAndUpdate(req.params._id, req.body);
    console.log("🚀 ~ file: tasks.js ~ line 23 ~ router.put ~ task", task)
    res.json({
        status: 'Task Updated'
    })
})
module.exports = router;