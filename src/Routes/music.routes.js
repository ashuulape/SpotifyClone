const express=require("express")
const musicController=require("../Controllers/music.controller")
const multer=require("multer")
const Middleware=require('../middlewares/auth.middelware')


const upload=multer({
    storage:multer.memoryStorage()
    
})

const router=express.Router();

router.post('/upload',Middleware.Authartis, upload.single('music'),musicController.CreateMusic)
router.post('/createalbum',Middleware.Authartis,musicController.CreateAlbum)

router.get('/page=:id',Middleware.AuthUser,musicController.getmusic)

router.get('/album',Middleware.AuthUser,musicController.getAlbum)

router.get('/album/:id',Middleware.Authartis,musicController.getAlbumBuID)


module.exports= router