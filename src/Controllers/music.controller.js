const MusicModel=require("../models/music.model")
const JWT=require("jsonwebtoken")
const {uploadfile}=require("../services/storage.service")


const CreateMusic=async(req,res)=>{

    const token =req.cookies.token

    if (!token) return res.status(401).json({ message: "unauthenticated" })

  try {
     const decoded= await JWT.verify(token ,process.env.JWT_TOKEN)

    if (decoded.role !== "artist") return res.status(403).json({ message: "forbidden" })

      
 

  const {title}=req.body

  const  file=req.file

  const filedata=await uploadfile(file.buffer.toString('base64'))

  const music = await MusicModel.create({
    url:filedata.url,
    title,
    artist:decoded.id
  })

  res.status(201).json({
    message:"Music created successfully",
    music
  })

 } catch (err) {
  console.log(err.message)
    return res.status(403).json({message:"forbidden"})
    
  }

}

module.exports={CreateMusic}