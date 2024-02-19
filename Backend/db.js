const mongoose = require("mongoose");
const mongoURI ='mongodb+srv://amitdhadange71:Amit123@cluster0.8iiebt7.mongodb.net/Food?retryWrites=true&w=majority'

const mongoDB =async() => {
  await mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology: true},async(error,result)=>{
    if(error) console.log("---",error)
    else{
    console.log("connected");
    const featch=await mongoose.connection.db.collection("Food_items")
    featch.find({}).toArray(async function(err,data){
      
      const foodCategory = await mongoose.connection.db.collection("Food_category")
      foodCategory.find({}).toArray(function(err,CatData){
        if(err)console.log(err)
        else {
          global.Food_items =data;
          global.Food_category =CatData;
        }
      })
      // if(err)console.log(err)
      // else {
      //   global.food_items =data;
      
      // }

    })
  }
  });
}

module.exports = mongoDB;