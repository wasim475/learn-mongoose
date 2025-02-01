const express = require("express")
const renameController = require('../../controller/Course/updatePart/renameController')
const _ = express.Router()

_.post("/rename", renameController)

module.exports = _