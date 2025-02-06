const { Batters } = require('../../../model/popolateModel')

const createBatter = async (req, res)=>{
    const {batterName} = req.body
    try {
        const batter = await new Batters({name: batterName})
        await batter.save()
        res.send(batter)
    } catch (err) {
        for(field in err.errors)
            return res.send({error:err.errors[field].message})
    }
    
    
}

module.exports = createBatter