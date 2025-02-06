const mongoose = require("mongoose")
const { validate } = require('./courseSchema')
const {Schema} = mongoose

const TeamSchema = new Schema({
    name:{
        type:String,
        require:true,
        validate:{
            validator: (value)=> value && value.length > 2,
            message:"write team name in 3 character."
        },
        batter: mongoose.Types.ObjectId,
        ref: "Batter"
    }
})

const BatterSchema = new Schema({
    name: {
        type: String,

        validate:{
            validator: (value)=> value && value.length>3,
            message:"Batter name must be atleast 3 character long."
        }
    }
})

const Team = mongoose.model("team", TeamSchema)
const Batters = mongoose.model("Batter", BatterSchema)

module.exports = {Team, Batters}