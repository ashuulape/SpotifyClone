const mongoose=require('mongoose')


const ConnectDB=async()=>{
 await mongoose.connect(`${process.env.MONGODB_URI}`)
await console.log('Database Connected');

}


module.exports=ConnectDB
