const { log } = require('console');
const path = require('path')

const controller = {
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/login.html'));
    },
    register:  (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/register.html'));
    },
    profile:(req,res)=>{
        console.log(req.query);
        res.send(`Usuario con Id número ${req.params.id}`);
    },
}

module.exports = controller;
