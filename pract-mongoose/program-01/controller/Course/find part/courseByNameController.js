const Course = require("../../../model/PracticeModel/courseSchema");

const courseByNameController = async (req, res) => {
  const course = await Course.find({ name: /.*by.*/i });
  res.send(course);
};

module.exports = courseByNameController;
