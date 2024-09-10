const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log('server is running');
    res.send('Hi Garv');
    // res.sendStatus(500);
    // res.status(500).send('OOPS :(');
    // res.status(500).json({message : 'Error :('});
    // res.download("server.js");
    // res.render("index",{text : "Bakliwal",name : "Kirtan"});
})

const userRouter = require('./routes/users')
app.use("/users", userRouter)
app.listen(3000)