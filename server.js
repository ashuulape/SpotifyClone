const app =require("./src/app")
const ConnectDB = require("./src/db/DataBase")
require("dotenv").config()


ConnectDB()
const Port=process.env.Port || 8000

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})