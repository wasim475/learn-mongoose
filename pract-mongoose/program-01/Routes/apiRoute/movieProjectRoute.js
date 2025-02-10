const express = require("express")
const createMovieController = require('../../controller/movieProject/createMovieController')
const createGenreController = require('../../controller/movieProject/createGenreController')
const _ = express.Router()

_.post("/createmovie", createMovieController)
_.post("/creategenre", createGenreController)
_.post("/createrental", createRentalController)
_.get("/rentals", getRentalsController)

module.exports = _