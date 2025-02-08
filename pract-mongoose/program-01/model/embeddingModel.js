const mongoose = require("mongoose")
const { validate } = require('./courseSchema')
const {Schema} = mongoose


const TeamSchema = new Schema({
    name:{
        type:String,
        require:true,
        maxlength: 10,
        validate:{
            validator: (value)=> value && value.length > 2,
            message:"write team name in 3 character."
        },
    },
   
})  

const BatterSchema = new Schema({
    name: {
        type: String,
        validate:{
            validator: (value)=> value && value.length>3,
            message:"Batter name must be atleast 3 character long."
        }
    },
    teamInfo: TeamSchema,
})

const TeamEM = mongoose.model("teamEM", TeamSchema)
const BatterEM = mongoose.model("batterEM", BatterSchema)

module.exports = {TeamEM, BatterEM}