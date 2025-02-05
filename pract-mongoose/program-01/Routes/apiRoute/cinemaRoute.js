const express = require("express")
const createCinemaGenrasController = require('../../controller/cinema/Find and Create/createCinemaGenrasController')
const _ = express.Router()

_.post("/createcinemagenre", createCinemaGenrasController)

module.exports = _