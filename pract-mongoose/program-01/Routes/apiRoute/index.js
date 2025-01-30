const express = require('express')
const _ = express.Router()
const productRoute = require("./productRoute")

_.use("/products", productRoute)

module.exports = _