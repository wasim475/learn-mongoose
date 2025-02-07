const express = require("express")
const createBatter = require('../../controller/model relationShip/populate/batterCreate')
const createTeam = require('../../controller/model relationShip/populate/createTeam')
const teamInfo = require('../../controller/model relationShip/populate/teamInfo')
const _ = express.Router()

_.post("/createbatter",createBatter)
_.post("/createteam",createTeam)
_.get("/teaminfo",teamInfo)

module.exports = _