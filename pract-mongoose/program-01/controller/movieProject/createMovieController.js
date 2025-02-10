const Movie = require('../../model/MovieProjectModel/movieModel')
const movieValidation = require('../../validation/movieValidation')

const createMovieController = async (req,res)=>{
    const {error}= movieValidation(req.body)
    if(error){
        return res.send({error: error.details[0].message})
    }
    try {
        const{title,numberInStock,dailyRentalRate}= req.body
        const existingMovie = await Movie.findOne({title:{$regex: new RegExp(title,"i")} })
        console.log(title) 
        if(existingMovie){
            return res.send({warn:`${title} already exist.`})
        }
        const movie = await new Movie({title, numberInStock, dailyRentalRate})
        movie.save()
        if(movie){
            return res.send(movie)
        }   

        
    } catch (error) {
        for(field in error.errors){
            return error.errors[field].message
        }
    }
}

module.exports = createMovieController