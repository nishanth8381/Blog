const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')
const mongoose = require('mongoose')

mongoose.connect(MONGOURI,{useUnifiedTopology:true,useNewUrlParser:true})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongoDB!!');
})

mongoose.connection.on('error',(err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log('server is running!!')
})

app.get('/',(req,res)=>{
    res.json('Hello World');
})