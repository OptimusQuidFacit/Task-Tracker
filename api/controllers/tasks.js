const taskModel= require('../models/tasks')

const createTask= async (req,res)=>{
    const newTask= new taskModel({
        id:req.body.id,
        Name: req.body.Name,
        Deadline: req.body.Deadline,
        Reminder: req.body.Reminder,
        completed: req.body.completed
    });
    try{
       const task=  await newTask.save();
       res.json(task);
    }
    catch(err){
        console.log(err);
    }
}
const getTasks= async (req, res)=>{
    try{
  const tasks= await taskModel.find({}) ;
  res.json(tasks);
    }
    catch (err){
        console.log(err)
    }
}
const updateTasks= async(req,res)=>{

    //  const taskCollection= await taskModel.find({});
    // taskCollection && await taskModel.deleteMany({});
    const tasks= req.body;
   try { 
    // const findTasks= await taskModel.find({});
    // if(findTasks.length>0){
    tasks.forEach(async (task)=>{
       await taskModel.updateOne({id:task.id}, {...task});
    })
// }
//     else{
//        await taskModel.insertMany(tasks);
//     }
    const updatedTasks= await taskModel.find({});
    res.json(updatedTasks);
    }
    catch(err){
        console.log(err);
    }
    
}
const deleteTask= async(req,res)=>{
    const deleteId= req.query.id
    await taskModel.deleteOne({id:deleteId});
}

module.exports= {createTask, getTasks, updateTasks, deleteTask}