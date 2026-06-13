const app =require("./src/app")
const ConnectDB = require("./src/db/DataBase")
require("dotenv").config()
const router=require("./src/Routes/auth.routes")

app.use("/api/auth",router)

ConnectDB()
const Port=process.env.Port || 8000

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})