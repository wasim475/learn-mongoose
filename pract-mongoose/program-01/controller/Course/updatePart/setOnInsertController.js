const Course = require('../../../model/PracticeModel/courseSchema')
 
const setOnInsertController = async (req,res)=>{
    const {courseId, courseStatus}= req.body
    const course = await Course.updateOne(
        {$and:[{"_id":courseId},{"price":{$lt:20}}] },
        {$setOnInsert:{"Course": courseStatus}},
        {upsert:true, writeConcern:{w: "majority" },strict:false}
    )

    res.send(course)
}

module.exports = setOnInsertController