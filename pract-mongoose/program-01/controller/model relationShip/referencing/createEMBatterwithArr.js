const { BatterEM, TeamEM } = require('../../../model/embeddingModel');
const { Batters } = require("../../../model/referencingModel");

const createEMBatterWithArr = async (req, res) => {
  const { batterName, teamId } = req.body;
  try {
    const team = await TeamEM.findOne({"_id":teamId})
    console.log(team)
    const batter = await new BatterEM({ "name": batterName, "teamInfo": team })
    await batter.save();
    // console.log(batter.teamInfo.name)
    res.send(batter);
  } catch (err) {
    for (field in err.errors)
      return res.send({ error: err.errors[field].message });
  }
};

module.exports = createEMBatterWithArr;
