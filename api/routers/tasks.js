const express= require('express');
const router= express.Router();

const {createTask, getTasks, updateTasks, deleteTask }= require('../controllers/tasks');

router.post('/addnew', createTask);
router.get('/getasks', getTasks);
router.post('/updateall', updateTasks);
router.delete('/delete?', deleteTask);

module.exports=router;