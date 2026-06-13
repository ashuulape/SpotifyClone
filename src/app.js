const cookieParser = require('cookie-parser');
const express=require ('express');
const authroute=require("./Routes/auth.routes")
const musicroute=require("./Routes/music.routes")
const app=express()

app.use(express.json(),cookieParser())

app.use("/api/auth",authroute)
app.use("/api/music",musicroute)







module.exports=app