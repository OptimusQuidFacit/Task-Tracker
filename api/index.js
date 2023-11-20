const express= require('express');
const dotenv= require('dotenv');
const app= express();
const mongoose= require('mongoose');
dotenv.config();
const taskRouter=require('./routers/tasks');
const cors= require('cors');
const path = require('path');


mongoose.connect(process.env.MONGO_SEC)
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/tasks', taskRouter);



const port= process.env.PORT|| 5000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})