const Genra = require('../../model/MovieProjectModel/MovieGenre')
const genreValidation = require('../../validation/genreValidation')

const createGenreController = async (req,res)=>{
    const {error} = genreValidation(req.body)
    if(error){
        return res.send({error:error?.details[0].message})
    }
    if(!error){
        const {name}= req.body
        const existingGenre = await Genra.findOne({name})
        console.log(existingGenre)
        if(existingGenre){
            return res.send({warn:"Genre already Exist."})
        } 
   
        try {
            const genre = await new Genra({name})
            await genre.save()
            res.send(genre)
        } catch (err) {
            for(field in err.errors){
                return res.send({error: err.errors[field].message})
            }
        }
    }
}    
 
module.exports = createGenreController