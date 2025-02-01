const Course = require("../../../model/courseSchema");

const paginationController = async (req, res) => {
  const { pageNumber, pageSize } = req.body;
  const course = await Course.find({})
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);
  res.send(course);
};

module.exports = paginationController;
