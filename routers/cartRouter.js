const {Cart} = require("../Models/CartModel")
const router = require("express").Router()

router.route('/')
.post(async(req,res)=>{
  console.log(req.body)
   try{
    let product = new Cart(req.body)   
    product = await product.save()
    console.log(product)
    res.status(200).json({sucess:true,cart:product})
   }catch(error){
    res.json({sucess:false,message:error.message})    
   }
})

router.route('/:id')
.get(async(req,res)=>{
  // console.log("userId",req.params.id)
  try{
      const getData = await Cart.find({userId:req.params.id})
      res.status(200).json({success:true,cart:getData})
    } catch (err) {
        res.json({success:true,message:err.message})
    } 
})
.delete(async(req,res)=>{
  console.log(".cartId",req.params.id)
   try{
    let deletedItem = await Cart.findByIdAndDelete(req.params.id)
    let allCartData = await Cart.find({}) 
    res.status(200).json({success:true,allCartData:allCartData})
  }catch(err){
    res.json({success:false,message:err.message})     
  }

})

module.exports = router;
