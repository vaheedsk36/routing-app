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

// Get request using a specific Id (routing parameter)

route.get('/accounts/:Id',(req,res)=>{
    const accountId = Number(req.params.Id);
    const getAccount = accounts.find((account)=>account.Id === accountId);
    
    if(!getAccount){
        res.status(500).send("Account not found");
    }else{
        res.json({userData:[getAccount]})
    }

    
})

module.exports = route;