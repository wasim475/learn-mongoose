const express = require("express")
const _ = express.Router()
const {BASE_URL} = process.env
const apiRoute = require("./apiRoute")

_.use(BASE_URL,apiRoute )
module.exports = _