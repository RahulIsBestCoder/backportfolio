const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
require("dotenv").config();
const database = mongoose.set('strictQuery', true);
console.log(new Date());
mongoose.connect(process.env.DB);

mongoose.connection.on('error',err=>{
    console.log('connection failed',err); 
});
mongoose.connection.on('connected',connected=>{
    console.log('connection established with data base....');
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const Route=require('./route/router');
app.use('/api/v1',Route);
module.exports=app;