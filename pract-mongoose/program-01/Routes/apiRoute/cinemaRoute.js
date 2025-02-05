const express = require("express")
const createCinemaGenrasController = require('../../controller/cinema/Find and Create/createCinemaGenrasController')
const getAllCinema = require('../../controller/cinema/Find and Create/getAllCinema')
const _ = express.Router()

_.post("/createcinemagenre", createCinemaGenrasController)
_.get("/allcinema", getAllCinema)

module.exports = _