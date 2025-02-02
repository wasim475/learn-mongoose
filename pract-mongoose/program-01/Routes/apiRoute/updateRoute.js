const express = require("express")
const renameController = require('../../controller/Course/updatePart/renameController')
const incController = require('../../controller/Course/updatePart/incController')
const maxController = require('../../controller/Course/updatePart/maxController')
const mulController = require('../../controller/Course/updatePart/mulController')
const _ = express.Router()

_.post("/rename", renameController)
_.post("/inc", incController)
_.post("/max", maxController)
_.post("/mul", mulController)

module.exports = _