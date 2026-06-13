const express=require("express")
const musicController=require("../Controllers/music.controller")
const multer=require("multer")

const upload=multer({
    storage:multer.memoryStorage()
    
})

const router=express.Router();

router.post('/upload',upload.single('music'),musicController.CreateMusic)


module.exports= router 