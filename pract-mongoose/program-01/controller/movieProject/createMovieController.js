const { Genra } = require('../../model/MovieProjectModel/MovieGenre')
const Movie = require('../../model/MovieProjectModel/movieModel')
const movieValidation = require('../../validation/movieValidation')

const createMovieController = async (req,res)=>{
    const {error}= movieValidation(req.body)
    if(error){
        return res.send({error: error.details[0].message})
    }
    try {
        const{title,numberInStock,dailyRentalRate , genreId}= req.body
        const existingMovie = await Movie.findOne({title:{$regex: new RegExp(title,"i")} })
        const genre = await Genra.findById({"_id":genreId})
         
        if(existingMovie){
            return res.send({warn:`${title} already exist.`})
        } 
        const movie = await new Movie({title, numberInStock, dailyRentalRate, genre})
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