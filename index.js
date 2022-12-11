const express = require("express");
const app = express();
const accounts = require("./database");

const port = process.env.PORT || 2022;

app.get('/',(req,res)=>{
    res.send('working...');
});

app.listen(port,()=>{
    console.log(`Services is listening at PORT:${port}`);
});

