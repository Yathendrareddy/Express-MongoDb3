import express from "express"
import bodyParser from "body-parser"
import userRouter from "./router/user.js"
import mongoose from "mongoose"

const dbURI = "mongodb+srv://anil:anil@cluster0.0mblz.mongodb.net/student?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(
    (result)=>{
        console.log("connected to DB")
        server.listen(PORT)
        console.log("server started")
    }
)
.catch(
    (err)=>{
        console.log(err)
    }
)

const server = express()
const PORT = 3000

server.use(bodyParser.json())
var home = (req,res)=>res.send("Welcome to port no: 3000")
server.use("/getStudentDeatils",userRouter)
server.get("/",home)
