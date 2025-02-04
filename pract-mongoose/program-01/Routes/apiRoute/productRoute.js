const express = require("express");
const courseController = require("../../controller/Course/find part/courseController");
const allCourseController = require("../../controller/Course/find part/allCourseController");
const courseAbove15Controller = require("../../controller/Course/find part/courseAbove15Controller");
const courseByNameController = require("../../controller/Course/find part/courseByNameController");
const paginationController = require("../../controller/Course/find part/paginationController");
const updateCorseController = require("../../controller/Course/find part/upadateCourseController");
const validationlCourseController = require('../../controller/Course/Create/validationlCourseController');
const _ = express.Router();
_.post("/course", courseController);
_.post("/createcoursewithvalidatetion", validationlCourseController);
_.get("/allcourse", allCourseController);
_.get("/courseabove15", courseAbove15Controller);
_.get("/coursebyname", courseByNameController);
_.post("/pagination", paginationController);
_.post("/update-course", updateCorseController);

module.exports = _;
