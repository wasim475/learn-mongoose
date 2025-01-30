const express = require('express')
const courseController = require('../../controller/Course/courseController')
const allCourseController = require('../../controller/Course/allCourseController')
const courseAbove15Controller = require('../../controller/Course/courseAbove15Controller')
const courseByNameController = require('../../controller/Course/courseByNameController')
const paginationController = require('../../controller/Course/paginationController')
const _ = express.Router()
_.post("/course", courseController)
_.get("/allcourse", allCourseController)
_.get("/courseabove15", courseAbove15Controller)
_.get("/coursebyname", courseByNameController)
_.post("/pagination", paginationController)

module.exports = _