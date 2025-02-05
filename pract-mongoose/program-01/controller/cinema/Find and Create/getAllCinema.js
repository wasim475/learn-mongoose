const Cinema = require('../../../model/cinemaModel')

const getAllCinema = async (req,res)=>{
    const allCinema = await Cinema.find()
    .select("name genre")
    res.send(allCinema)
}

module.exports = getAllCinema