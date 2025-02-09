const genreValidation = require('../../validation/genreValidation')

const createGenreController = async (req,res)=>{
    const {error} = genreValidation(req.body)
    if(error){
        return res.send({error:error?.details[0].message})
    }
    if(!error){
        const {name}= req.body
        console.log(name)      
    }
}    
 
module.exports = createGenreController