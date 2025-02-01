const course = require("../../../model/courseSchema");

const courseController = async (req, res) => {
  const { name, author, price, tags } = req.body;
  const createCourse = await new course({ name, author, price, tags });
  await createCourse.save();
  res.send(createCourse);
};

module.exports = courseController;
