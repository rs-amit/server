const {Products} = require("../Models/DataModel")
const router = require("express").Router()

router.route("/")
.post(async(req,res)=>{
   console.log(req.body)
  try{
    let product = new Products({
      title:req.body.title,
      image:req.body.image,
      disc:req.body.disc,
      price:req.body.price
      })   
    product = await product.save()
    console.log(product)
    res.status(200).json({sucess:true,product:product})
  }catch(error){
    res.json({sucess:false,message:error.message})    
  }
})
.get(async(req,res)=>{
   try{
        const getAllPost = await Products.find({})
        res.status(200).json({success:true,product:getAllPost})
      } catch (err) {
        res.json({success:true,message:err.message})
    }
})

router.route('/:id')
.delete(async(req,res)=>{
  console.log(req.params.id)
  try{
    let deletedItem = await Products.remove({_id:req.params.id})
    if(deletedItem){
      let allProductData = await Products.find({}) 
      res.status(200).json({success:true,allProductData:allProductData})
    }
  }catch(err){
    res.json({success:false,message:err.message})     
  }
})

module.exports = router;