const mongoose = require("mongoose");
const mongoURI ='mongodb+srv://amitdhadange71:Amit123@cluster0.8iiebt7.mongodb.net/Food?retryWrites=true&w=majority'

const mongoDB =async() => {
  await mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology: true},async(error,result)=>{
    if(error) console.log("---",error)
    else{
    console.log("connected");
    const featch=await mongoose.connection.db.collection("Food_items")
    featch.find({}).toArray(function(err,data){
      if(err)console.log(err)
      else console.log();

    })
  }
  });
}

module.exports = mongoDB;