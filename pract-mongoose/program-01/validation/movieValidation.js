const Joi = require("joi")

const movieValidation = (movies)=>{
    const movieSchema = Joi.object({
        title: Joi.string().min(3).max(50).required(),
        numberInStock: Joi.number().min(0).max(255).required(),
        dailyRentalRate:Joi.number().min(0).max(255).required(),
        genreId:Joi.string()
    })
    return movieSchema.validate(movies)
}

module.exports = movieValidation