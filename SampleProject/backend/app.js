const express = require('express') ;
const app = express() ;
const dbConnect = require('./db')
const colors  = require("colors");
const routes = require("./routes/userRoutes.js")
const PORT = 3000 ;
const cors = require('cors');
//NOTE fn to connect with the mongodb
dbConnect() ;

app.use(cors());
app.use(express.json());
app.use('/api',routes);
app.use('/api',require('./routes/categoryRoutes'));
//listening on the server
app.listen(PORT,()=>{
    console.log(colors.america(`App is listening on the port:${PORT}`))
})