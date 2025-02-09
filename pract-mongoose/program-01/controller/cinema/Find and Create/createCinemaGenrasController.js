const Cinema = require('../../../model/PracticeModel/cinemaModel')
const validateGenres = require('../../../utility/validationGenres')

const createCinemaGenrasController = async (req,res)=>{
    const {name, genre, director} = req.body
    try {
        const cinema = await new Cinema({name, genre, director})
        await cinema.save()
        res.send(cinema)
    } catch (err) { 
        for(field in err.errors){
           return res.send({Error:err.errors[field].message})
        } 
        // res.json({"Error":err?.message})
        // res.send(err.errors.director.message)
    }
}

module.exports = createCinemaGenrasController