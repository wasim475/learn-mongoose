const Joi = require("joi")
const genreValidation = (genre)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required()
    }) 
    return schema.validate(genre)
    
}   

module.exports = genreValidation