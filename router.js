const express = require("express");
const route = express.Router();
const accounts = require("./database");

// GET request
route.get('/accounts',(req,res)=>{
    res.json({userData:accounts});
})

// POST request
route.post('/accounts',(req,res)=>{
    const incomingAccount = req.body;
    accounts.push(incomingAccount);
    console.log(accounts);
    res.json(accounts);
})

module.exports = route;