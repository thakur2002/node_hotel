const express=require('express');
const connectdb= require('./db.js');
const bodyParser=require('body-parser');
const app=express();
require('dotenv').config();
connectdb();

app.use(bodyParser.json())

const logger=function(req,res,next){
    console.log(`[${new Date().toLocaleString()}]: Request to ${req.originalUrl}`);
    next();
}
app.get('/',(req,res)=>res.send("Welcome to this server"));
app.get('/idli',(req,res)=>res.send("here is idli"));

const personrouter=require('./routes/personroutes.js');
const menurouter=require('./routes/menuroutes.js');

app.use('/person',personrouter);
app.use('/menu',menurouter);

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});
