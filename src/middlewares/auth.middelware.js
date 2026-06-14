const JWT=require("jsonwebtoken")


const Authartis=async(req, res, next)=>{

const token=req.cookies.token

if(!token)return res.status(401).json({message:"Unauthorized"})

try {
    const decoded=await JWT.verify(token,process.env.JWT_TOKEN)
    req.user=decoded

    if(req.user.role!=="artist")return res.status(403).json({message:"you dont have accsess"})
    next()
    
} catch (error) {
    res.status(403).json({message:error.message})
    
}

}

const AuthUser=async(req,res,next)=>{

  const token=req.cookies.token

  if(!token)return res.status(401).json({message:"Unauthorized"})

  try {
    const decoded=await JWT.verify(token,process.env.JWT_TOKEN)
    req.user=decoded

    if (decoded.role!=="user"&&decoded.role!=="artist" )return res.status(403).json({message:"you dont have accsess"})

     
    next()
  
    
  } catch (error) {
    res.status(403).json({message:error.message})
    
  }
}



module.exports={Authartis ,AuthUser}