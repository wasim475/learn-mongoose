const express = require('express')
const courseController = require('../../controller/Course/courseController')
const allCourseController = require('../../controller/Course/allCourseController')
const _ = express.Router()
_.post("/course", courseController)
_.get("/allcourse", allCourseController)

module.exports = _