const express = require("express")
const dbConnect= require("./db/dbConnect")
const studentRouter = require("./routes/studentRouter")
const cors=require("cors")

//port and hostname
const PORT=4000
const hostName="127.0.0.1"

//server
const app=express()
app.use(express.json())

//cors
app.use(cors())

//routes
app.use("/student",studentRouter)

//server listen
app.listen(PORT,hostName, async ()=>{
   await dbConnect()
    console.log(`server started at http://${hostName}:${PORT} and db connected`);
})