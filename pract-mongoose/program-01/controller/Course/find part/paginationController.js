const Course = require("../../../model/PracticeModel/courseSchema");

const paginationController = async (req, res) => {
  const { pageNumber, pageSize } = req.body;
  const course = await Course.find({})
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);
  res.send(course);
};

module.exports = paginationController;
