const express = require("express")
const createMovieController = require('../../controller/movieProject/createMovieController')
const _ = express.Router()

_.post("/createmovie", createMovieController)

module.exports = _