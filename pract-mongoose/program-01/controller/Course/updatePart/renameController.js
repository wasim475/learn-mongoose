const Course = require('../../../model/PracticeModel/courseSchema')

const renameController = async (req,res)=>{
    const {courseId}= req.body
    const course = await Course.findOneAndUpdate(
        {'_id':courseId},
        {$rename:{"Instractor":"author"}},
        {new:true}
    )
    res.send(course)

    console.log(course)
}

module.exports = renameController