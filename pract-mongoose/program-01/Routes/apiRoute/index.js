const express = require('express')
const _ = express.Router()
const productRoute = require("./productRoute")
const updateRoute = require("./updateRoute")

_.use("/products", productRoute)
_.use("/update", updateRoute)

module.exports = _