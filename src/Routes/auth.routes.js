const express=require("express")
const authController=require('../Controllers/auth.controller')

const router=express.Router()

const model=require("../models/user.model")


router.post('/register',authController.registerUser)

router.post('/login',authController.loginUser)



module.exports=router