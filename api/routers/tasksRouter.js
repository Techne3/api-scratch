const router = require('express').Router();

const Tasks = require('../helpers/tasksModel');

router.get('/', (req,res)=> {

    Tasks.find(req.params.id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(error => res.status(500).json({error: 'you messed up the get'}))
})



module.exports = router