const express = require("express")
const createBatter = require('../../controller/model relationShip/populate/batterCreate')
const createTeam = require('../../controller/model relationShip/populate/createTeam')
const _ = express.Router()

_.post("/createbatter",createBatter)
_.post("/createteam",createTeam)

module.exports = _