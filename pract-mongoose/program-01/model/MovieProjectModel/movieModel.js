const mongoose = require("mongoose")
const { validate } = require('../PracticeModel/courseSchema')
const {Schema}= mongoose

const Movies = new Schema({
    title:{
        type:String,
        require:true,
        validate:{
            validator: (value)=> value && value.length>3,
            message:"movie title must be atleast 3 character long."
        }
    },
    genre:{
        type:genreSchema
    }

})