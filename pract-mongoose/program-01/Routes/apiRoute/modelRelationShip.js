const express = require("express")
const createBatter = require('../../controller/model relationShip/referencing/batterCreate')
const createTeam = require('../../controller/model relationShip/referencing/createTeam')
const teamInfo = require('../../controller/model relationShip/referencing/teamInfo')
const createEMTeam = require('../../controller/model relationShip/referencing/createEMTeam')
const createEMBatter = require('../../controller/model relationShip/referencing/createEMBatter')
const createEMBatterWithArr = require('../../controller/model relationShip/referencing/createEMBatterwithArr')
const addembatterwitharr = require('../../controller/model relationShip/referencing/addEMBatterwithArr')
const _ = express.Router()

_.post("/createembatter",createEMBatter)
_.post("/createembatterwitharr",createEMBatterWithArr)
_.post("/addembatterwitharr",addembatterwitharr)
_.post("/createbatter",createBatter)
_.post("/createteam",createTeam)
_.post("/createemteam",createEMTeam)
_.get("/teaminfo",teamInfo)

module.exports = _