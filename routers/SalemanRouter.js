const {Salesman} = require("../Models/SalesMan")
const router = require("express").Router()

router.route('/')
.post(async(req,res)=>{
  //  console.log(req.body) 
   try{
    let salesMan = new Salesman(req.body) 
    salesMan = await salesMan.save()
    res.status(200).json({success:true,message:"Salesman has been added in our List"})
   }catch(error){
    res.json({success:false,message:error.message})    
   }
})
.get(async(req,res)=>{
    try{
        const getAllPost = await Salesman.find({})
        res.status(200).json({success:true,salesman:getAllPost})
      } catch (err) {
        res.json({success:true,message:err.message})
    }
})



router.route('/:id')
.delete(async(req,res)=>{
     console.log(req.params.id)
     try{
       const deleteSalesman  = await Salesman.remove({_id:req.params.id})
       if(deleteSalesman){
         let getAllSalesman = await Salesman.find({})
         res.json({success:true,getAllSalesman:getAllSalesman })
       }
     }catch(error){
        res.json({success:false,message:error.message})       
     }
})

router.route('/login')
.post(async(req,res)=>{
     const {email , password} = req.body;

  console.log(email)
  console.log(password)

  if(!email && !password){
    res.res({success:false , error:"please enter your email and password"})
  }
  try{
    const getUser = await Salesman.findOne({email})
    if(!getUser){
      res.json({ success: false, error: "invalid credentials" })
    }
    if(getUser.password.includes(password)){
      res.status(200).json({message:"Successfully Login" , user:getUser})
    }else{
      res.json({success:false,error:"incorrect password"})
    }
  }catch(error){
    res.json({success:false,error:error.message})
  }

})

module.exports = router;





