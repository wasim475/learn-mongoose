const { BatterEMA } = require('../../../model/PracticeModel/embeddingWithArray')

const addembatterwitharr = async(req,res)=>{
    const{teamName, batterId}= req.body
    const batter = await BatterEMA.findById(batterId)
    
    batter.teamInfo.push({"name":teamName})
    await batter.save()
    res.json(batter)
}

module.exports = addembatterwitharr