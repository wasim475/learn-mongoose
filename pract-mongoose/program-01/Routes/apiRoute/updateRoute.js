const express = require("express")
const renameController = require('../../controller/Course/updatePart/renameController')
const incController = require('../../controller/Course/updatePart/incController')
const _ = express.Router()

_.post("/rename", renameController)
_.post("/inc", incController)

module.exports = _