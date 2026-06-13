const MusicModel=require("../models/music.model")
const JWT=require("jsonwebtoken")


const CreateModel=async(req,res)=>{

    const token =req.cookies.token

    !token?res.status(401).json({message:"unauthonticated"}):''

  try {
     const decoded= await JWT.verify(token ,process.env.JWT_TOKEN)

     decoded.role!=="artist"?res.status(403).json({message:"forbidden"}):''

      
  } catch (err) {
    return res.status(403).json({message:"forbidden"})
    
  }

  const {title}=req.body

  const  file=req.file


}