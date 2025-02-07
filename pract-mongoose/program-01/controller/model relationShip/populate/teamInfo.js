const { Team } = require('../../../model/popolateModel')

const teamInfo = async (req,res)=>{
    const team = await Team.find().populate("Batter")
    res.send(team)
}
 
module.exports =teamInfo