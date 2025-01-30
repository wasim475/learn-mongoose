const Course = require('../../model/courseSchema')

const allCourseController = async (req, res)=>{
    const getcourse = await Course.find({"isPublish":true}).sort("-name").select('name author')
    res.send(getcourse)
}

module.exports = allCourseController