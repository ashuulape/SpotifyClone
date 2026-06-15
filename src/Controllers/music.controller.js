const MusicModel=require("../models/music.model")
const JWT=require("jsonwebtoken")

const albumModel=require("../models/album.model")
const {uploadfile}=require("../services/storage.service")

const CreateMusic=async(req,res)=>{

 const {title}=req.body

  const  file=req.file

  const filedata=await uploadfile(file.buffer.toString('base64'))

  const music = await MusicModel.create({
    url:filedata.url,
    title,
    artist:req.user.id
  })

  res.status(201).json({
    message:"Music created successfully",
    music
  })



}

const CreateAlbum=async(req,res)=>{

  const{title,musics}=req.body

  const album=await albumModel.create({

    title,
    artist:req.user.id,
    musics:musics
    
  })

  res.status(201).json({
    message:"album created succesfully",
    album:{
      id:album._id,
      title:album.title,
      artist:album.artist,
      musics:album.musics,
    }
  })
 
 
}


const getmusic =async(req,res)=>{

 const page=req.params.id
  const music= await MusicModel.find().limit(1).skip(page).populate("artist","username")

  res.status(200).json({
    message:'music fetch sucessfully',
    music
  })

}

const getAlbum=async(req,res)=>{
  const album=await albumModel.find().limit(20).select("title artist").populate("artist","username")

  res.status(200).json({
    message:'album fetch sucessfully',
    album
  })
}

const getAlbumBuID=async(req,res)=>{

 
  const idalbum=req.params.id
  const album=await albumModel.findById(idalbum).populate("artist", "username")

  res.status(200).json({
    message:'album fetch sucessfully',
    album
  })
}


module.exports={CreateMusic,CreateAlbum,getmusic,getAlbum,getAlbumBuID}