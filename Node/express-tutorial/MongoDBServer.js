const express = require('express');
const chalk = require('chalk');
const app = express();
const mongoose = require('mongoose');

// const userRoutes = require('./routes/userRoutes')
//NOTE this method will connect the mongodb server to the nodejs application.

mongoose.connect('mongodb://localhost:27017/').then(() => {
    console.log(chalk.red('MONGODB is connected'))
})


// app.use(express.json())  ;
// app.listen(3000,()=>{

// server.listen(3000,()=>{
//     console.log('server is running')
// })
// })



// npm i mongoose => object data modelling library.. 
// by using mongoose library we can define schema , apply validation on our documents fields.   
// mongoose is generally working as a layer between nodejs and mongodb.

//NOTE show dbs => show the available database in the mongodb server on your localhost

//NOTE -  use databaseName => switch to database if the database is not available it creates new one

//NOTE - db.collectionName.insertOne used to create collection  then insert one entry in the database

//NOTE - show collections => give the available collection on your current database

//NOTE Create 
//NOTE db.insertOne() => to insert single documents

//NOTE db.insertMany([]) => to insert multiple documents

//NOTE READ OPERATION

//NOTE - db.collectionName.find() => used to retrieve all the documents in the current collections

//NOTE db.collectionName.findOne() => returns first matching document.

//NOTE Update operation 
