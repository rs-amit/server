const express =require('express');
const router = express.Router()
const {User} = require('../Models/AuthModel')



router.route('/')
.post(async (req, res) => {
    let getUserData = new User({
        userName: req.body.userName,
        img: req.body.img,
        email: req.body.email,
        password: req.body.password,
        address:req.body.address,
        gender:req.body.gender,
        dob:req.body.dob,
        companyId:req.body.companyId,
    })
    try {
        getUserData = await getUserData.save()
        res.status(200).json({ "success": true, getUserData })
        } catch (err) {
            res.status(400).json({ "success": false, error:err.message })
        }
})
.get(async(req,res)=>{
   try{
        const getAllUser = await User.find({})
        res.status(200).json({success:true,user:getAllUser})
      } catch (err) {
        res.json({success:true,message:err.message})
    }
})


router.route('/user/:id')
.get(async(req,res)=>{
  console.log(req.params.id)
    try{
      const getData = await User.findById(req.params.id)
      console.log(getData)
      res.status(200).json({success:true,UserDetail:getData})
    } catch (err) {
        res.json({success:true,message:err.message})
    } 
})


router.route('/login')
    .post( async (req, res) => {
       const {email , password} = req.body
       console.log(email)
       console.log(password)
      
       if(!email || !password){
            res.status(400).json(
              {
                success:false ,
                message:"please enter your email and password"})
              }
          try { 
              const getUser = await User.findOne({email})
              if(!getUser){
              res.status(404).json(
                { 
                  success: false,
                  message: "invalid credentials" 
                })
             }
 
         if (getUser.password.includes(password)) {
             res.status(200).json({success:true , user:getUser})
         } else {
             res.status(404).json({success:false , message:'invalid credentials'})
         }
       } catch (error) {
         res.status(400).json({success:false , message:error.message})
       }
})


module.exports = router;