const Course = require('../../model/courseSchema')

const courseByNameController = async(req,res)=>{
    const course = await Course.find({"name": /.*by.*/})
    res.send(course)
}

module.exports = courseByNameController;