const mongoose=require("mongoose");

async function connectDB() {
    const  mongourl="mongodb://127.0.0.1:27017/hotels";
try{
    await mongoose.connect(mongourl);
}
catch(err){
    console.error(err.message);
    process.exit(1);
} 
    const db=mongoose.connection;
    
    db.on('connected',()=>console.log("connected to mongodb"));
    db.on('error',()=>console.log("error"));
    db.on('disconnected',()=>console.log("disconnected from mongodb"));

}
module.exports=connectDB;