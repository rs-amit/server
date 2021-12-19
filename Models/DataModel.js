const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
   title:{
     type:String,
     require:true
   },
   image:{
     type:String,
     require:true
   },
   disc:{
     type:String,
     require:true
   },
   price:{
     type:String,
     require:true
   }
 

},{timestamps:true} )

const Products  = mongoose.model("Contact",productSchema)

module.exports = {Products}