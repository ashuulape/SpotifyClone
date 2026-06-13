const cookieParser = require('cookie-parser');
const express=require ('express');
const authroute=require("./src/Routes/auth.routes")
const musicroute=require("./src/Routes/music.routes")

app.use("/api/auth",authroute)
app.use("/api/music",musicroute)


const app=express()
app.use(express.json(),cookieParser())




module.exports=app