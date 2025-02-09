const { BatterEMA } = require('../../../model/embeddingWithArray')

const removeEMBatterwithArr = async (req,res)=>{
    const {batterId,teamId}= req.body
    const batter = await BatterEMA.findById(batterId)
    const team =  batter.teamInfo.id(teamId)

    team.deleteOne()
   await batter.save()
    res.send(batter)
}

module.exports = removeEMBatterwithArr