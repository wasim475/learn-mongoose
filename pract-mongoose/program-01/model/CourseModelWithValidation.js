const mongoose = require("mongoose")
const {Schema}= mongoose

const Course = new Schema({
    name:{
        type: String,
        minlength: 5,
        maxlength: 50,
        
    },
    author:{
        type:String,
        required: function(){return this.name}
    },
    tags:{
        type: Array,
        
        validate:{
            validator: function(value){
                return value.length > 0
            },
            message:"A course have atleast one tag."
        }
    }
})

module.exports = mongoose.model("Course", Course)