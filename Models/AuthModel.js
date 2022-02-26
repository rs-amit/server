const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userName:{
    type:String,
    require:true
  },
  img:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  address:{
    type:String,
    require:true
  },
  gender:{
    type:String,
    require:true
  },
  dob:{
    type:String,
    require:true
  },
  companyId:{
    type:String,
    require:true
  }
},{timestamps:true});

const User = mongoose.model("User",UserSchema)

module.exports = {User}