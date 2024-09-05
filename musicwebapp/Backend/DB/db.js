const mongoose =require('mongoose');


const connectDB = async() =>{
  try{
    await mongoose.connect(process.env.DB_URL,{});
    console.log('DB connected');

  }catch(err){
    console.error(`Error: ${err.message}`);
  }
}
module.exports=connectDB