const express = require("express")
const renameController = require('../../controller/Course/updatePart/renameController')
const incController = require('../../controller/Course/updatePart/incController')
const maxController = require('../../controller/Course/updatePart/maxController')
const _ = express.Router()

_.post("/rename", renameController)
_.post("/inc", incController)
_.post("/max", maxController)

module.exports = _