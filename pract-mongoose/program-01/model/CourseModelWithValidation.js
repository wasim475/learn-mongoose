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
                return value && value.length > 0
            },
            message:"A course have atleast one tag."
        }
    },
    // async validate
    price: {
        type: Number,
        validate: {
          validator: function(value) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const result = value && value > 0;
                if (result) {
                  resolve(true); // সঠিক হলে resolve হবে
                } else {
                  reject(new Error("Price must be greater than 0")); // না হলে reject হবে
                }
              }, 4000); // 4 সেকেন্ডের বিলম্ব
            });
          },
          message: "Price must be greater than 0"
        }
      }
      
})

module.exports = mongoose.model("ValidationCourse", Course)