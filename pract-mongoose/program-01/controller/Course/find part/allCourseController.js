const Course = require("../../../model/PracticeModel/courseSchema");

const allCourseController = async (req, res) => {
  const getcourse = await Course.find({
    isPublish: true,
    tags: { $in: ["frontend", "backend"] },
  })
    .sort("-price")
    .select("name author");
  res.send(getcourse);
};

module.exports = allCourseController;
