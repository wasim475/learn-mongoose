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
    // Custom Validation
    tags:{
        type: Array,
        
        validate:{
            validator: function(value){
                return value.length > 0
            },
            message:"A course have atleast one tag."
        }
    },
    // async validate
    price:{
        type: Number,
       validate:{
        isAsync: true,
        validator: function(value. callback) {
           setTimeout(() => {
            const result = value ? && value>0
            callback(result)
           }, 4000);
        }
         message: "Price must be greater than 0"
       }
    }
})

module.exports = mongoose.model("Course", Course)