const ImageKit = require('imagekit')
require("dotenv").config()

const imagekitClient= new ImageKit({
 publicKey:process.env.PUBLIC_KEY,
    privateKey:process.env.PRIVATE_KEY,
     urlEndpoint: process.env.URL_ENDPOINT,
    
  
    
})

const uploadfile=async(file)=>{
    const result =await imagekitClient.upload({
      file,
        fileName: "music_" + Date.now(),
        folder: "yt-complete-backend/music"
        
    })
    return result
}

module.exports={uploadfile}