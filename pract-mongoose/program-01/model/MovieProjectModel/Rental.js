const { boolean, required } = require('joi')
const mongoose = require("mongoose")
const {Schema}= mongoose

const Rental = mongoose.model("Rental", new Schema({
    customer:{
        type: new Schema({
            name:{
                type:String,
                required:true
            },
            isGold:{
                type:boolean,
                default:false
            },
            phone:{
                type:String,
                required:true
            }
        }),
        required:true
    },
    movie: {
        type: new mongoose.Schema({
          title: {
            type: String,
            required: true,
            trim: true, 
            minlength: 5,
            maxlength: 255
          },
          dailyRentalRate: { 
            type: Number, 
            required: true,
            min: 0,
            max: 255
          }   
        }),
        required: true
      },
      dateOut: { 
        type: Date, 
        required: true,
        default: Date.now
      },
      dateReturned: { 
        type: Date
      },
      rentalFee: { 
        type: Number, 
        min: 0
      }

}))

module.exports = Rental