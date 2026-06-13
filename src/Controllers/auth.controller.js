const model=require('../models/user.model')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const registerUser=async (req,res)=>{


  const {username,email,password,role}=req.body
    try {

       const duplicateUser= await model.findOne({
       $or:[
        {username},
        {email}]
         })

       duplicateUser?res.status(409).json({message:"User already exists"}):""

       const hash= await bcrypt.hash(password,10)

        const user=await model.create({
            username,
            email,
            password:hash,
            role,

        })

        const token= JWT.sign({
            id:user._id,
            user:user.role
        },process.env.JWT_TOKEN
       )

       res.cookie("token",token)

       res.status(200).json({
        message:"user created Sucessfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            pass:user.password
        },
        token
       })


    } catch (error) {

        res.status(404).json({ message: error.message })
        
    }
}


const loginUser=async (req,res)=>{
      const {username,email,password}=req.body

      const user= await model.findOne({
         $or:[
        {username},
        {email} ]

      })

      !user? res.status(404).json({message:"User not found"}):''

      const PassCheck=await bcrypt.compare(password,user.password)

      !PassCheck?res.status(401).json({message:"incorrect password"}):''
      

 const token =JWT.sign(
    {
        id:user._id,
        role:user.role, }, process.env.JWT_TOKEN, )

 res.cookie("token",token)

 return res.status(200).json({
    messagee:`welcome back ${user.username}`,
})
    
}


module.exports={registerUser,loginUser}