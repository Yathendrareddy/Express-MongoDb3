import mongoose from "mongoose"
const Schema = mongoose.Schema
const userSchema = new Schema({
    studentFirstName:{
        type:String,
        required:true
    },
    collegeName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Employee = mongoose.model("Employee", userSchema)