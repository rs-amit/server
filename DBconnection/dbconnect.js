const mongoose = require('mongoose')

const connectionUrl = "mongodb+srv://amit852:amit852@cluster0.sggik.mongodb.net/InFinityScroll?retryWrites=true&w=majority";

const connectDB=async()=>{
  await mongoose.connect(connectionUrl , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then((response)=>console.log('server connected to the DataBase')).catch((err)=>console.log(err))
}


module.exports={ connectDB };