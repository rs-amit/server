const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  userId:{
     type:String,
     require:true
  },
  productId:{
     type:String,
     require:true
  },
  title:{
     type:String,
     require:true
  },
  disc:{
    type:String,
    require:true
  },
  image:{
     type:String,
     require:true
  },
  price:{
     type:String,
     require:true
   }
 

},{timestamps:true} )

const Cart  = mongoose.model("Cart",cartSchema)

module.exports = {Cart}