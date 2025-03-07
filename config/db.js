const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://keyuri:gGwjUPjOUhzyqQcZ@cluster0.s3w2e.mongodb.net//admindata");

const db=mongoose.connection;

db.once("open",(err)=>{
    if(err){
        console.log("error");
        return false
    }
    console.log("Db is connected");
})
module.exports=db;