const mongoose = require("mongoose")
const { validate } = require('./courseSchema')
const {Schema}= mongoose

const CinemaSchema = new Schema({
    name:{
        type:String,
        require: true,
        validate:{ 
            validator: function(value){
                return value && value.length > 1
            },
            message:"name have atleast 3 charatar."
        }
    },
    genre:{
        type:String,
        validate:{
            validator: (value)=> value.length>3,
            message:"write genre atleast 3 character long."
        },
    },
    director:{
        type:String,
        validate:{
            validator: function(value){
                return value.length > 3 
            },
            message: "director name atleast 4 character long."
        }
    },
    
})

const Cinema = mongoose.model("Cinema", CinemaSchema)

module.exports = Cinema