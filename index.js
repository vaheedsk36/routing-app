const express = require("express");
const app = express();
const route = require("./router");
const port = process.env.PORT || 2022;

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('working...');
});

app.listen(port,()=>{
    console.log(`Services is listening at PORT:${port}`);
});

