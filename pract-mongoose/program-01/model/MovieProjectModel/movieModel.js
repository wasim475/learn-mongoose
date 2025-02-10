const mongoose = require("mongoose")
const { validate } = require('../PracticeModel/courseSchema')
const GenreSchema = require('./MovieGenre')
const { number, required } = require('joi')
const {Schema}= mongoose

const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        validate:{
            validator: (value)=> value && value.length>3,
            message:"movie title must be atleast 3 character long."
        }
    },
    genre:{
        type:GenreSchema
    }, 
    numberInStock:{
        type:Number,
        required: true
    },
    dailyRentalRate:{
        type:Number,
        required: true
    }    

})

const Movie = mongoose.model("movie", movieSchema)
module.exports = Movie