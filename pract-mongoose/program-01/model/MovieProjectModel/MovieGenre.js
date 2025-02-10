const mongoose = require("mongoose")
const {Schema}= mongoose

const GenreSchema = new Schema({
    name:{
        type:String,
        require:true,
        minlength:3,
        maxlength:20,
    }
})

const Genra = mongoose.model("genre",GenreSchema)

module.exports = Genra;
module.exports = GenreSchema