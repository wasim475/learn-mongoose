const Course = require("../../../model/courseSchema");

const courseByNameController = async (req, res) => {
  const course = await Course.find({ name: /.*by.*/i });
  res.send(course);
};

module.exports = courseByNameController;
