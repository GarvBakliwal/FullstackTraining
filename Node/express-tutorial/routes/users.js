const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('users list')
})

router.get('/new',(req,res)=>{
    res.send('new user form')
})

router.post('',(req,res)=>{
    res.send('Create User')
})

router.get('/:id',(req,res)=>{
    res.send(`Get User by ID : ${req.params.id}`)
})

module.exports = router