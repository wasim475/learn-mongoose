const express = require('express')
const _ = express.Router()
const productRoute = require("./productRoute")
const updateRoute = require("./updateRoute")
const cinemaRoute = require("./cinemaRoute")
const relationRoute = require("./modelRelationShip")

_.use("/products", productRoute)
_.use("/update", updateRoute)
_.use("/cinema", cinemaRoute)
_.use("/relationshipmodel", relationRoute)

module.exports = _