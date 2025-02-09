const { BatterEM, TeamEM } = require('../../../model/PracticeModel/embeddingModel');
const { TeamEMA, BatterEMA } = require('../../../model/PracticeModel/embeddingWithArray');
const { Batters } = require("../../../model/PracticeModel/referencingModel");

const createEMBatterWithArr = async (req, res) => {
  const { batterName, teamId } = req.body;
  try {
    const team = await TeamEM.findOne({"_id":teamId})
    console.log(team)
    const batter = await new BatterEMA({ "name": batterName, "teamInfo": [team] })
    await batter.save();
    // console.log(batter.teamInfo.name)
    res.send(batter);
  } catch (err) {
    for (field in err.errors)
      return res.send({ error: err.errors[field].message });
  }
};

module.exports = createEMBatterWithArr;
