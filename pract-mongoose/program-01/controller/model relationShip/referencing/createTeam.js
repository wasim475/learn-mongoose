const { Team } = require("../../../model/PracticeModel/referencingModel");

const createTeam = async (req, res) => {
  const { teamName } = req.body;
  try {
    const team = await new Team({
      name: teamName,
    });
    await team.save();
    res.send(team);
  } catch (err) {
    for (field in err.errors) {
      res.send({ error: err.errors[field].message });
    }
  }
};

module.exports = createTeam;
