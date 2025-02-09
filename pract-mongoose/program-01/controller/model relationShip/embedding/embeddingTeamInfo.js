const embeddingTeamInfo = async (req,res)=>{
    const teamInfo = async (req, res) => {
        const team = await Batters.find()
          .populate("teamId", "name -_id")
          .select("name -_id");
        res.send(team);
      };
}

module.exports = embeddingTeamInfo