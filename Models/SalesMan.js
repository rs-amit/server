const mongoose = require('mongoose');

const salesmanSchema = mongoose.Schema({
   name:{
     type:String,
     require:true
   },
   email:{
     type:String,
     require:true
   },
   admin:{
     type:Boolean,
     require:true,
     default:false
   },
   password:{
     type:String,
     require:true
   }

},{timestamps:true})

const Salesman = mongoose.model("Salesman",salesmanSchema)

module.exports ={Salesman};



