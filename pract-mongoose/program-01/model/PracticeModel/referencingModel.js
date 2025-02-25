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
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"team"
    }
})

const Team = mongoose.model("team", TeamSchema)
const Batters = mongoose.model("Batter", BatterSchema)

module.exports = {Team, Batters}