const { Batters } = require("../../../model/referencingModel");

const createBatter = async (req, res) => {
  const { batterName, teamId } = req.body;
  try {
    const batter = await new Batters({ name: batterName, teamId });
    await batter.save();
    res.send(batter);
  } catch (err) {
    for (field in err.errors)
      return res.send({ error: err.errors[field].message });
  }
};

module.exports = createBatter;
