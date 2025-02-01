const Course = require("../../../model/courseSchema");

const courseAbove15Controller = async (req, res) => {
  const course = await Course.find({
    isPublish: true,
    price: { $gte: 15 },
  }).select("name author price -_id");
  res.send(course);
};

module.exports = courseAbove15Controller;
