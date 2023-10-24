const mongoose = require('mongoose');

const taskSchema= new mongoose.Schema({
    id:{type:String, required:true},
    Name: {type: String, required:true},
    Deadline:{type: String, required:true},
    Reminder: {type: Boolean},
    completed: {type:Boolean, default:false}
});


module.exports= mongoose.model("tasks", taskSchema);