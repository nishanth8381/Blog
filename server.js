const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('server is running!!')
})

app.get('/',(req,res)=>{
    res.json('Hello World');
})