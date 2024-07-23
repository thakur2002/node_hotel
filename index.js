const express=require('express');
const connectdb= require('./db.js');
const bodyParser=require('body-parser');
const app=express();
connectdb();

app.use(bodyParser.json())


app.get('/',(req,res)=>res.send("Welcome to this server"));
app.get('/idli',(req,res)=>res.send("here is idli"));

const personrouter=require('./routes/personroutes.js');
const menurouter=require('./routes/menuroutes.js');

app.use('/person',personrouter);
app.use('/menu',menurouter);


app.listen(200,()=>{console.log("server is running on port 200")});
