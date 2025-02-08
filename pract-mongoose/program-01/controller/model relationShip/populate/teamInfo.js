const { Batters } = require('../../../model/popolateModel')

const teamInfo = async (req,res)=>{ 
    const team = await Batters.find().populate("teamId", "name -_id").select("name -_id")
    res.send(team)
}
 
module.exports =teamInfo