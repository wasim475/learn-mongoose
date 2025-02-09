const mongoose = require("mongoose")
const {Schema} = mongoose

const CourseSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    tags:[String],
    isPublish:{
        type: Boolean,
        default: false
    },


})

const Course = mongoose.model("Course", CourseSchema)

module.exports= Course